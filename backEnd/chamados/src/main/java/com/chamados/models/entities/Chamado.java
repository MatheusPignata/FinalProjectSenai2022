package com.chamados.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

//gerar contrutor inteiro e vazio
//@AllArgsConstructor
//NoArgsConstructor
//gerar getters, setters, toString, equals, hashCode
//@Data
//representa a tabela
@Entity
@Table(name = "chamados")
public class Chamado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_chamado")
	private long id;

	@ManyToOne
	@JoinColumn(name = "id_funcionario", nullable = false)
	private Usuario funcionario;

	@ManyToOne
	@JoinColumn(name = "id_usuario", nullable = false)
	private Usuario cliente;

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

	@Column(name = "serial")
	private String serial;

	@Column(name = "orcamento")
	private long orcamento;

	public Chamado(long id, Usuario funcionario, Usuario cliente, String produto, String cor, String descricao,
			String status, String marca, String serial, long orcamento) {
		this.id = id;
		this.funcionario = funcionario;
		this.cliente = cliente;
		this.produto = produto;
		this.cor = cor;
		this.descricao = descricao;
		this.status = status;
		this.marca = marca;
		this.serial = serial;
		this.orcamento = orcamento;
	}

	public Chamado() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Usuario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Usuario funcionario) {
		this.funcionario = funcionario;
	}

	public Usuario getCliente() {
		return cliente;
	}

	public void setCliente(Usuario cliente) {
		this.cliente = cliente;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public long getOrcamento() {
		return orcamento;
	}

	public void setOrcamento(long orcamento) {
		this.orcamento = orcamento;
	}

	public String getSerial() {
		return serial;
	}

	public void setSerial(String serial) {
		this.serial = serial;
	}
}
