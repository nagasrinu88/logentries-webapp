/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.le.user.controls;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author NavNag
 */
@Controller(value = "/app/user/")
public class LogRetriver {

    @RequestMapping(value = "")
    @ResponseBody
    public String getLogs() {
        return "Hello this is the log";
    }
}
