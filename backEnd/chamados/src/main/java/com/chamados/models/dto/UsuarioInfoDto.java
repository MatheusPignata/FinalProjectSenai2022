package com.chamados.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsuarioInfoDto {
	private long id;
	private String cpf;
	private String nome;
	private String email;
	private long telefone;
}
