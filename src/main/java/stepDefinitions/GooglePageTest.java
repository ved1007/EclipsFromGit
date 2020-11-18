package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GooglePageTest {
	
	WebDriver driver;
	
	@Given("^Open Web Page$")
	public void open_Web_Page()   {
		
		//Window
		System.setProperty("webdriver.chrome.driver", "C:/Users/PC User1/Documents/Devops/chromedriver.exe");
		
		//Macbook
		System.setProperty("webdriver.chrome.driver","/Users/vedant.jagani/Documents/Automation/SampleAutomation/Drivers/chromedriver");

		driver = new ChromeDriver();
		driver.get("https://rv--test.my.salesforce.com/");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	    
	}

	@Then("^Populate the UserName field$")
	public void populate_the_UserName_field() throws Throwable {
		driver.findElement(By.id("username"));
			 
	}

	@Then("^Populate the Password field$")
	public void populate_the_Password_field()   {
		driver.findElement(By.id("password"));
	    
	}

	@Then("^Click on the Login button$")
	public void click_on_the_Login_button() throws Exception  {
		driver.findElement(By.id("Login")).click();
		Thread.sleep(5000);
	   
	}

	@Then("^Close the Web Page$")
	public void close_the_Web_Page()   {
		driver.quit();
	    
	}

}
