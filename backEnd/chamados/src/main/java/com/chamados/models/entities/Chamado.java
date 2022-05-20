package com.chamados.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
@Table(name = "chamados")
public class Chamado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_chamado")
	private long id;

	@ManyToOne
	@JoinColumn(name = "id_usuario", nullable = false)
	private Usuario usuario;

	@Column(name = "produto")
	private String produto;

	@Column(name = "cor")
	private String cor;

	@Column(name = "descricao")
	private String descricao;

	@Column(name = "status")
	private String status;

	@Column(name = "marca")
	private String marca;

	@Column(name = "orcamento")
	private long orcamento;

	
}
