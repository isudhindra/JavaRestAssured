import org.junit.runner.RunWith;
import cucumber.api.*;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources"},
		plugin = {"pretty", "json:target/cucumber-reports/Cucumber.json","html:target/cucumber-html-report","html:test-output"},	
		glue = {""},
//		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		tags= "@Regression"
)

public class RunCukesTest {}
