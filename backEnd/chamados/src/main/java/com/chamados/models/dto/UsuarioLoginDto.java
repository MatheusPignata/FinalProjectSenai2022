package com.chamados.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UsuarioLoginDto {
	private long id;
	private String nome;
	private String email;
	private long telefone;
}
