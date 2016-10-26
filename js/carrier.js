var calendarPlugin={
    createEvent:function(testName,successCallback,errorCallback){
        cordova.exec(successCallback,errorCallback,'MyPlugin','TestPlugin',[
            {
                'TestName':testName
            }
        ]);
    }
}