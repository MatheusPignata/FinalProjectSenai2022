package com.chamados.models.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.chamados.models.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	@Query(value = "SELECT usuarios.* FROM usuarios WHERE codigo = :codigo", nativeQuery = true)
	Usuario usuarioLogin(@Param("codigo") String codigo);

	@Query(value = "SELECT usuarios.* FROM usuarios WHERE cpf = :cpf && senha = :senha", nativeQuery = true)
	Usuario adminLogin(@Param("cpf") String cpf, @Param("senha") String senha);
	
	@Query(value = "SELECT usuarios.* FROM usuarios WHERE id_usuario = :id", nativeQuery = true)
	Usuario usuarioInfo(@Param("id") long id);
	
	
}
