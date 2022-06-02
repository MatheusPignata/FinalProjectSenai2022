package com.chamados.models.dto;

import com.chamados.models.entities.Usuario;

/*
@NoArgsConstructor
@AllArgsConstructor
@Data
*/
public class ChamadoClienteInfoDTO {
	private long id;
	private String nome;
	private long telefone;
	private String endereco;

	public ChamadoClienteInfoDTO(Usuario u) {
		this.id = u.getId();
		this.nome = u.getNome();
		this.telefone = u.getTelefone();
		this.endereco = u.getEndereco();
	}

	public ChamadoClienteInfoDTO(long id, String nome, long telefone, String endereco) {
		this.id = id;
		this.nome = nome;
		this.telefone = telefone;
		this.endereco = endereco;
	}

	public ChamadoClienteInfoDTO() {

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

	public long getTelefone() {
		return telefone;
	}

	public void setTelefone(long telefone) {
		this.telefone = telefone;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

}
