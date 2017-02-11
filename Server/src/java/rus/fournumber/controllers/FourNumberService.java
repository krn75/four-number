package java.rus.fournumber.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
//@ImportResource(lo)
public class FourNumberService {

    //
//    @RequestMapping(value = OPERATIONS)
//    public Set<String> get_operations(){
//        return calculatorModel.getOperations();
//    }
//
//    @RequestMapping(value = GET_CALCULATE)
//    public double calculate(double op1,double op2, String operation ){
//        return calculatorModel.calculate(op1,op2,operation);
//    }
//
//    @RequestMapping(value = CALCULATE,method = RequestMethod.POST)
//    public double calculate(@RequestBody CalculateRequest request){
//        return calculatorModel.calculate(request.getOp1(),request.getOp2(),request.getOperation());
//    }

    public static void main(String[] args) {
        SpringApplication.run(FourNumberService.class,args);
    }

}
