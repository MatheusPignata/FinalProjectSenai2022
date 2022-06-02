package com.chamados.models.dto;

import com.chamados.models.entities.Chamado;

/*
@NoArgsConstructor
@AllArgsConstructor
@Data
*/
public class InfoChamadoDTO {
	private long id;
	private ChamadoFuncionarioInfoDTO funcionario;
	private ChamadoClienteInfoDTO cliente;
	private String produto;
	private String cor;
	private String descricao;
	private String status;
	private String marca;
	private double orcamento;

	public InfoChamadoDTO(Chamado c) {
		this.id = c.getId();
		this.funcionario = new ChamadoFuncionarioInfoDTO(c.getFuncionario());
		this.cliente = new ChamadoClienteInfoDTO(c.getCliente());
		this.produto = c.getProduto();
		this.cor = c.getCor();
		this.descricao = c.getDescricao();
		this.status = c.getStatus();
		this.marca = c.getMarca();
		this.orcamento = c.getOrcamento();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public ChamadoFuncionarioInfoDTO getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(ChamadoFuncionarioInfoDTO funcionario) {
		this.funcionario = funcionario;
	}

	public ChamadoClienteInfoDTO getCliente() {
		return cliente;
	}

	public void setCliente(ChamadoClienteInfoDTO cliente) {
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

	public double getOrcamento() {
		return orcamento;
	}

	public void setOrcamento(double orcamento) {
		this.orcamento = orcamento;
	}

}
