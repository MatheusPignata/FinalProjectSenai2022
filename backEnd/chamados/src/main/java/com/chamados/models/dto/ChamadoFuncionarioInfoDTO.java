package com.chamados.models.dto;

import com.chamados.models.entities.Usuario;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_DEFAULT)
/*
 * @AllArgsConstructor
 * 
 * @NoArgsConstructor
 * 
 * @Data
 */
public class ChamadoFuncionarioInfoDTO {
	private long id;
	private String nome;

	public ChamadoFuncionarioInfoDTO(Usuario u) {
		this.id = u.getId();
		this.nome = u.getNome();
	}

	public ChamadoFuncionarioInfoDTO(long id, String nome) {
		this.id = id;
		this.nome = nome;
	}

	public ChamadoFuncionarioInfoDTO() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
