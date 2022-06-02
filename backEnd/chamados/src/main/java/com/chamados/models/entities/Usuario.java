package com.chamados.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

//gerar contrutor inteiro e vazio
//@AllArgsConstructor
//@NoArgsConstructor
//gerar getters, setters, toString, equals, hashCode
//@Data
//representa a tabela
@Entity
@Table(name = "usuarios")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	private long id;

	@Column(name = "senha", nullable = false)
	private String senha;

	@Column(name = "nome", nullable = false)
	private String nome;

	@Email(message = "Email Invalido!", regexp = "\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
	@Column(name = "email", nullable = true, unique = true)
	private String email;

	@Column(name = "cpf", nullable = false, unique = true)
	private String cpf;

	@Column(name = "endereco", nullable = false)
	private String endereco;

	@Column(name = "telefone", nullable = false)
	private long telefone;

	@Column(name = "cargo", nullable = false)
	private String cargo;

	public Usuario(long id) {
		this.id = id;
	}

	public Usuario(long id, String nome, String email) {
		this.id = id;
		this.nome = nome;
		this.email = email;
	}

	public Usuario() {
		
	}
	
	public Usuario(long id, String senha, String nome, String email, String cpf, String endereco, long telefone,
			String cargo) {
		this.id = id;
		this.senha = senha;
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.endereco = endereco;
		this.telefone = telefone;
		this.cargo = cargo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
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

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public long getTelefone() {
		return telefone;
	}

	public void setTelefone(long telefone) {
		this.telefone = telefone;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", senha=" + senha + ", nome=" + nome + ", email=" + email + ", cpf=" + cpf
				+ ", endereco=" + endereco + ", telefone=" + telefone + ", cargo=" + cargo + "]";
	}	
}
