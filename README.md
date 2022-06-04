# Tic Tac Toe

### Table of Contents

  - [VS Code devcontainer]
  - [Git commit message hooks]

## VS Code devcontainer

VS Code devcontainer is configured and contains the following configuration:

  - uses Node.js 16.x in [docker-compose.yml]
  - uses the [.env] file in the root of the project and global variables will be available in the environment
  - installs the following packages globally by [Dockerfile]:
      - [@antfu/ni]
      - [pnpm]
  - uses [eslint] as code analysis tool, VS Code extensions and settings are configured in [devcontainer.json] for this

How to use it:

  - install [Remote - Containers] extension, open command palette <kbd>Ctrl+Shift+P</kbd> or <kbd>F1</kbd> and select <kbd>Remote - Containers: Open Folder in Container...</kbd>
  - we need to use <kbd>Rebuild and Reopen in Container</kbd> after each change in `.devcontainer` folder or [.env] file updates
    - bottom left corner of the window, click on <kbd>Dev Container: Node.js & TypeScript</kbd> and select <kbd>Rebuild Container</kbd>

## Git commit message hooks

The [simple-git-hooks] package has been installed. Don't forget to run `npx simple-git-hooks`.

## License

[MIT]

[.env]: ./.env
[@antfu/ni]: https://github.com/antfu/ni
[devcontainer.json]: ./.devcontainer/devcontainer.json
[docker-compose.yml]: ./.devcontainer/docker-compose.yml
[Dockerfile]: ./.devcontainer/Dockerfile
[eslint]: https://eslint.org/
[Git commit message hooks]: #git-commit-message-hooks
[MIT]: ./LICENSE
[pnpm]: https://pnpm.io/
[Remote - Containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[simple-git-hooks]: https://github.com/toplenboren/simple-git-hooks
[VS Code devcontainer]: #vs-code-devcontainer
