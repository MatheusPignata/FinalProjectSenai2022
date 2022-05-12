package com.chamados.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//gerar contrutor inteiro e vazio
@AllArgsConstructor
@NoArgsConstructor
//gerar getters, setters, toString, equals, hashCode
@Data
//representa a tabela
@Entity
@Table(name = "usuarios")
public class Usuario {

	private static final long serialVersionUID = 1L;

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

	@Column(name = "codigo", nullable = false, unique = true)
	private String codigo;

	@Column(name = "telefone", nullable = false)
	private long telefone;

	public Usuario(long id) {
		this.id = id;
	}
}
