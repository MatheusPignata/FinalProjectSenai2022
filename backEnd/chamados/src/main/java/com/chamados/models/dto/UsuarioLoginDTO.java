package com.chamados.models.dto;

import com.chamados.models.entities.Usuario;

/*
@NoArgsConstructor
@AllArgsConstructor
@Data
*/
public class UsuarioLoginDTO {
	private long id;
	private String nome;
	private String email;
	private long telefone;
	private String endereco;
	private String cargo;

	public UsuarioLoginDTO(Usuario u) {
		this.id = u.getId();
		this.nome = u.getNome();
		this.email = u.getEmail();
		this.telefone = u.getTelefone();
		this.endereco = u.getEndereco();
		this.cargo = u.getCargo();
	}

	public UsuarioLoginDTO(long id, String nome, String email, long telefone, String endereco, String cargo) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
		this.endereco = endereco;
		this.cargo = cargo;
	}

	public UsuarioLoginDTO() {

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

}
