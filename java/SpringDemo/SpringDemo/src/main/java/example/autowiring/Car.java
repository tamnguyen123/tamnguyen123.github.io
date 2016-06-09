package example.autowiring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

/**
 * @author Tam Nguyen
 *
 */
public class Car {
	@Autowired
	private Brand brand;

	private boolean status;

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	@Override
	public String toString() {
		return "Car [brand=" + brand + ", status=" + status + "]";
	}
}
