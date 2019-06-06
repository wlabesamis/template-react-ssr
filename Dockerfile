FROM node:10-alpine AS builder

#workdir
WORKDIR ${WORKDIR}
#Install Software
RUN apk add git openssh-client

# Make ssh dir
RUN mkdir /root/.ssh/

# Copy over private key, and set permissions
# Warning! Anyone who gets their hands on this image will be able
# to retrieve this private key file from the corresponding image layer
ADD ./build/id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa

# Create known_hosts
RUN touch /root/.ssh/known_hosts
# Add gitlab key
RUN ssh-keyscan githumb.com >> /root/.ssh/known_hosts

# Clone the conf files into the docker container
RUN git clone https://github.com/wlabesamis/template-react-ssr.git $WORKDIR/react-ssr


#creating development instance
FROM node:10-alpine

#declaration of ARG
WORKDIR ${WORKDIR}

#Update the OS
RUN apk add --update alpine-sdk

COPY --from=builder $WORKDIR/react-ssr $WORKDIR/react-ssr

#Install Software
RUN cd $WORKDIR/react-ssr && npm install -g

ENTRYPOINT ["npm", "start"]
