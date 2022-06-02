package com.chamados.models.dto;

import com.chamados.models.entities.Chamado;

/*
@NoArgsConstructor
@AllArgsConstructor
@Data
*/
public class TodosChamadosDTO {
	private long id;
	private ChamadoFuncionarioInfoDTO funcionario;
	private String serial;
	private String status;
	private String produto;

	public TodosChamadosDTO(Chamado c) {
		this.id = c.getId();
		this.funcionario = new ChamadoFuncionarioInfoDTO(c.getFuncionario());
		this.serial = c.getSerial();
		this.status = c.getStatus();
		this.produto = c.getProduto();
	}

	public TodosChamadosDTO() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ChamadoFuncionarioInfoDTO getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(ChamadoFuncionarioInfoDTO funcionario) {
		this.funcionario = funcionario;
	}

	public String getSerial() {
		return serial;
	}

	public void setSerial(String serial) {
		this.serial = serial;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}
}
