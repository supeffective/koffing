FROM node:16-bullseye as base

ENV DEBIAN_FRONTEND noninteractive

ENV NEXT_TELEMETRY_DISABLED 1
ENV STORYBOOK_DISABLE_TELEMETRY 1

# For node 18:
#ENV NODE_OPTIONS "--openssl-legacy-provider"

ENV HOME /root
ENV YARN_CACHE_FOLDER /root/.cache/yarn
ENV GIT_USER_NAME "docker"
ENV GIT_USER_EMAIL "docker@localhost"

# Ensure local binaries are preferred over distro ones
ENV PATH /usr/src/app/node_modules/.bin:/usr/local/bin:$PATH

# Configure Locale and Timezone
ENV LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV TZ=Europe/Berlin

RUN apt-get update && \
    apt-get install -y locales && \
    apt-get clean -y && rm -rf /var/lib/apt/lists/* && \
    echo 'en_US.UTF-8 UTF-8\nde_DE ISO-8859-1' > /etc/locale.gen && \
    locale-gen && \
    dpkg-reconfigure locales

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install essentials
RUN apt-get update && \
    apt-get install -y git zsh jq && \
    apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Configure git
RUN git config --global user.email "${GIT_USER_EMAIL}" && \
    git config --global user.name "${GIT_USER_NAME}" && \
    git config --global pull.rebase false

# Add github to known hosts
RUN mkdir ~/.ssh && \
    touch ~/.ssh_config && \
    mkdir -p ~/.ssh && ssh-keyscan -H github.com >>~/.ssh/known_hosts

# Prepare package manager(s)
RUN npm install npm@latest -g && \
    npm install create-turbo -g

# Enable Yarn
RUN corepack enable && \
    corepack prepare yarn@stable --activate && \
    yarn config set --home enableTelemetry 0

WORKDIR /usr/src/app
EXPOSE 3000
