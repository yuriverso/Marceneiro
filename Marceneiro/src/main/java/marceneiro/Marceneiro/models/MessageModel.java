package marceneiro.Marceneiro.models;

import org.springframework.stereotype.Component;

@Component
public class MessageModel {
	private String message;
	
	
	// Getter and Setter
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
