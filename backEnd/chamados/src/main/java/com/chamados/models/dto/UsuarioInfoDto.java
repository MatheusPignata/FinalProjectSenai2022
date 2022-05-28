package com.chamados.models.dto;

import com.chamados.models.entities.Usuario;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonInclude(value = Include.NON_DEFAULT)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsuarioInfoDto {
	private long id;
	private String cpf;
	private String nome;
	private String email;
	private long telefone;
	
	public UsuarioInfoDto(Usuario u) {
		this.id = u.getId();
		this.cpf = u.getCpf();
		this.nome = u.getNome();
		this.email = u.getEmail();
		this.telefone = u.getTelefone();
	}
}
