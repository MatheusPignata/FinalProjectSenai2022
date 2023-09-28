-- CreateTable
CREATE TABLE `Usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `cargo` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chamados` (
    `id_chamado` INTEGER NOT NULL AUTO_INCREMENT,
    `cor` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `orcamento` DOUBLE NOT NULL,
    `produto` VARCHAR(191) NOT NULL,
    `serial` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `id_funcionario` INTEGER NOT NULL,

    PRIMARY KEY (`id_chamado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Chamados` ADD CONSTRAINT `Chamados_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
