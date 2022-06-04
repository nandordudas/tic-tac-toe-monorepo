# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.234.0/containers/typescript-node/.devcontainer/base.Dockerfile

ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update

ARG USER=node
USER ${USER}

RUN npm config set store-dir /home/${USER}/.pnpm-store
RUN npm install -g \
  @antfu/ni \
  pnpm
