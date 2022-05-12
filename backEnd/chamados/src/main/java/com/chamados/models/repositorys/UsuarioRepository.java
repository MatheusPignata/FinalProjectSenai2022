package com.chamados.models.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.chamados.models.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	@Query(value = "SELECT nome FROM usuarios WHERE codigo = :codigo", nativeQuery = true)
	Usuario usuarioLogin(@Param("codigo") String codigo);

	
	
}
