angular.module('app.services', [])
  .factory('DataService', function ($http) {

    var DataService = {};
    var queryTime=5000;
    var updateTime=30000;


    //登录获取SID
    DataService.getSSOLogin = function (username,password) {
      //queryString=;starttime=2015-11-11;endtime=2015-11-13
      return $http({
        url: serviceurl + 'ssologin.jsp?username=' + username +'&password='+password,
        method: 'get',
        timeout : queryTime
      });
    }

    //获取待办，已办列表
    DataService.getTaskList = function (token,language,type,size,page,params) {
      //queryString=;starttime=2015-11-11;endtime=2015-11-13
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=getTaskList&type=" + type+'&language=' + language+'&size=' + size+'&page=' + page+'&params=queryString='+params.trim(),
        method: 'get',
        timeout : queryTime
      });
    }
    //设置任务已读状态
    DataService.setTaskRead = function (token, taskId) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=setTaskRead"+'&taskId=' + taskId,
        method: 'get',
        timeout : updateTime
      });
    }

    //获取任务详情
    DataService.getTaskDetail = function (token, language,taskId,taskTypeId,stepNo,type) {
      //alert(serverurl + '?sid=' + token + "&cmd=getTaskDetail"+'&language=' + language+'&taskId=' + taskId+'&taskTypeId=' + taskTypeId+'&stepNo=' + stepNo)
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=getTaskDetail&type="+type+'&language=' + language+'&taskId=' + taskId+'&taskTypeId=' + taskTypeId+'&stepNo=' + stepNo,
        method: 'get',
        timeout : queryTime
      });
    }
    //获取任务历史审批意见
    DataService.getTaskHistoryList = function (token, language,processId,size,page) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=getTaskHistoryList" +'&language=' + language+'&processId=' + processId+'&size=' + size+'&page=' + page,
        method: 'get',
        timeout : queryTime
      });
    }
    //办理操作接口
    DataService.executeTask = function (token, language,taskId,processId,action,comment) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=executeTask" +'&taskId=' + taskId+'&processId=' + processId+'&action=' + action+'&comment=' + comment,
        method: 'get',
        timeout : updateTime
      });
    }
    //发送操作接口
    DataService.processTask = function (token, language,taskId,processId,participants) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=processTask" +'&language=' + language+'&taskId=' + taskId+'&processId=' + processId+'&participants=' + participants,
        method: 'get',
        timeout : updateTime
      });
    }
    //手动选择审批人
    DataService.getUserList = function (token, language,query,size,page,selectedUsers,userId) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=getUserList" +'&language=' + language+'&query=' + query.trim()+'&size=' + size+'&page=' + page+'&selectedUsers='+selectedUsers+'&userId='+userId,
        method: 'get',
        timeout : queryTime
      });
    }

    //任务加签发送
    DataService.appendTask = function (token, language,taskId,processId,participant,comment,processActionType) {
      if(processActionType==='add0'){
        return $http({
          url: serverurl + '?sid=' + token + "&cmd=appendTask" +'&language=' + language+'&taskId=' + taskId+'&processId=' + processId+'&participant=' + participant+'&comment=' + comment,
          method: 'get',
          timeout : updateTime
        });
      }
      if(processActionType==='add1'){
        return $http({
          url: serverurl + '?sid=' + token + "&cmd=ccTask" +'&language=' + language+'&taskId=' + taskId+'&processId=' + processId+'&participant=' + participant+'&comment=' + comment,
          method: 'get',
          timeout : updateTime
        });
      }

    }

    //加签任务审批
    DataService.assignTask = function (token, language,taskId,processId,comment) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=assignTask" +'&language=' + language+'&taskId=' + taskId+'&processId=' + processId+'&comment=' + comment,
        method: 'get',
        timeout : updateTime
      });
    }

    //3.10.	忘记密码发送邮件
    DataService.forgotPwd = function (userId) {
      return $http({
        url: serviceurl + 'common.jsp?cmd=forgotPwd&userId=' + userId,
        method: 'get',
        timeout : aaaaa
      });
    }

    //3.11.	我的信息
    DataService.getMyInfo = function (token) {
      return $http({
        url: serverurl + '?sid=' + token + "&cmd=getMyInfo",
        method: 'get',
        timeout : queryTime
      });
    }

    return DataService;
  });
