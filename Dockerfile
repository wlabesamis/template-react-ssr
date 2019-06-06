FROM node:10-alpine AS builder

#declaration of ARG
ARG WORKDIR

#workdir
WORKDIR $WORKDIR

#Install Software
RUN apk add git openssh-client

# Make ssh dir
RUN mkdir /root/.ssh/

# Create known_hosts
RUN touch /root/.ssh/known_hosts
# Add gitlab key
RUN ssh-keyscan githumb.com >> /root/.ssh/known_hosts

# Clone the conf files into the docker container
RUN git clone --branch feature-my-first-react-ssr https://github.com/wlabesamis/template-react-ssr.git $WORKDIR/react-ssr


#creating development instance
FROM node:10-alpine

#declaration of ARG
ARG WORKDIR

#Update the OS
RUN apk add --update alpine-sdk

COPY --from=builder $WORKDIR/react-ssr $WORKDIR/react-ssr

#workdir
WORKDIR $WORKDIR/react-ssr

#Install Software
RUN npm install

ENTRYPOINT ["npm", "start"]
