package com.chamados.models.dto;

import com.chamados.models.entities.Chamado;

/*
@NoArgsConstructor
@AllArgsConstructor
@Data
*/
public class ChamadoClienteDTO {
	private long id;
	private String produto;
	private String cor;
	private String descricao;
	private String status;
	private String marca;
	private double orcamento;

	public ChamadoClienteDTO(Chamado c) {
		this.id = c.getId();
		this.produto = c.getProduto();
		this.cor = c.getCor();
		this.descricao = c.getDescricao();
		this.status = c.getStatus();
		this.marca = c.getMarca();
		this.orcamento = c.getOrcamento();
	}

	public ChamadoClienteDTO(long id, String produto, String cor, String descricao, String status, String marca,
			double orcamento) {
		this.id = id;
		this.produto = produto;
		this.cor = cor;
		this.descricao = descricao;
		this.status = status;
		this.marca = marca;
		this.orcamento = orcamento;
	}

	public ChamadoClienteDTO() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public double getOrcamento() {
		return orcamento;
	}

	public void setOrcamento(double orcamento) {
		this.orcamento = orcamento;
	}
}
