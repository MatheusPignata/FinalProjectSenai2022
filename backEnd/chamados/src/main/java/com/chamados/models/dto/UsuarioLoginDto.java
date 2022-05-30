package com.chamados.models.dto;

import com.chamados.models.entities.Usuario;

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
	private String endereco;
	private char cargo;

	public UsuarioLoginDto(Usuario u) {
		this.id = u.getId();
		this.nome = u.getNome();
		this.email = u.getEmail();
		this.telefone = u.getTelefone();
		this.endereco = u.getEndereco();
		this.cargo = u.getCargo();
	}
}
