package com.chamados.models.dto;

import com.chamados.models.entities.Usuario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdminLoginDto {
	private long id;
	private String nome;
	private String email;
	
	public AdminLoginDto(Usuario u) {
		this.id = u.getId();
		this.nome = u.getNome();
		this.email = u.getEmail();
	}
}
