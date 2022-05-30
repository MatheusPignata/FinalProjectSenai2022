package com.chamados.controllers.routers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.UsuarioControll;
import com.chamados.models.dto.AdminLoginDto;
import com.chamados.models.dto.UsuarioInfoDto;
import com.chamados.models.dto.UsuarioLoginDto;
import com.chamados.models.entities.Usuario;

@RestController
@RequestMapping("/us")
public class UsuarioRoute {
	@Autowired
	UsuarioControll controll;

	// todos usuarios
	@GetMapping("/lis")
	public List<UsuarioLoginDto> listarUsuario() {
		return controll.listarUsuarios();
	}

	// listar informações do usuario especifico
	@GetMapping("/inf/{id}")
	public ResponseEntity<Object> listarInfoUsuario(@PathVariable long id) {
		return controll.listarInfoUsuario(id);
	}

	// login e cadastro
	@PostMapping("/log/{tipo}")
	public ResponseEntity<UsuarioLoginDto> loginUsuario(@RequestBody Usuario u, @PathVariable boolean tipo) {
		return tipo ? controll.criarUsuario(u) : controll.loginUsuario(u.getCpf(), u.getSenha());
	}

	@PostMapping("/log")
	public ResponseEntity<AdminLoginDto> loginAdmin(@RequestBody Usuario u) {
		return controll.loginAdmin(u);
	}

	@PutMapping("/alt/{id}")
	public ResponseEntity<Object> alterarIndoUsuario(@RequestBody Usuario u, @PathVariable long id) {
		return controll.altUsuario(u, id);
	}

	@DeleteMapping("/del/{id}")
	public ResponseEntity<Object> remUsuario(@PathVariable long id) {
		return controll.remUsuario(id);
	}

}
