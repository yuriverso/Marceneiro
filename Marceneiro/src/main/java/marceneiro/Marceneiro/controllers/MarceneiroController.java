package marceneiro.Marceneiro.controllers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import marceneiro.Marceneiro.dtos.MovelDto;
import marceneiro.Marceneiro.models.MessageModel;
import marceneiro.Marceneiro.models.Movel;
import marceneiro.Marceneiro.services.MarceneiroService;

@RestController
@CrossOrigin(origins="*")
public class MarceneiroController {
	
	@Autowired
	private MarceneiroService ser;
	
	@Autowired
	private MessageModel mm;
	
	
	@GetMapping("/api")
	public ResponseEntity<Object> listar(){
		return ResponseEntity.status(HttpStatus.OK).body(ser.findAll());
	}
	
	@PostMapping("/api")
	public ResponseEntity<Object> cadastrar(@RequestBody MovelDto m){
		if(m.getNome().equals("")) {
			mm.setMessage("Nome inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getMaterial().equals("")) {
			mm.setMessage("Material inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getLargura() == 0) {
			mm.setMessage("Largura inválida!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getComprimento() == 0) {
			mm.setMessage("Comprimento inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getPreco() == 0) {
			mm.setMessage("Preço inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		
		Movel movel = new Movel();
		BeanUtils.copyProperties(m, movel);
		movel.setData(LocalDate.now(ZoneId.of("UTC")));
		return ResponseEntity.status(HttpStatus.CREATED).body(ser.save(movel));
	}
	
	@PutMapping("/api/{id}")
	public ResponseEntity<Object> alterar(@PathVariable UUID id, @RequestBody MovelDto m){
		Optional<Movel> optional = ser.findById(id);
		if(!optional.isPresent()) {
			mm.setMessage("Nenhum registro encontrado com ese ID!");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(mm);
		}
		if(m.getNome().equals("")) {
			mm.setMessage("Nome inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getMaterial().equals("")) {
			mm.setMessage("Material inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getLargura() == 0) {
			mm.setMessage("Largura inválida!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getComprimento() == 0) {
			mm.setMessage("Comprimento inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		if(m.getPreco() == 0) {
			mm.setMessage("Preço inválido!");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(mm);
		}
		Movel movel = new Movel();
		BeanUtils.copyProperties(m, movel);
		movel.setId(optional.get().getId());
		movel.setData(optional.get().getData());
		return ResponseEntity.status(HttpStatus.OK).body(ser.save(movel));
	}
	
	@DeleteMapping("/api/{id}")
	public ResponseEntity<Object> remover(@PathVariable UUID id){
		Optional<Movel> optional = ser.findById(id);
		if(!optional.isPresent()) {
			mm.setMessage("Nenhum registro encontrado com ese ID!");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(mm);
		}
		Movel movel = optional.get();
		ser.delete(movel);
		mm.setMessage("Registro removido com sucesso!");
		return ResponseEntity.status(HttpStatus.OK).body(mm);
	}
	
}
