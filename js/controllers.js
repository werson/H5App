var mimes  = {
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'jpe': 'image/jpeg',
  'gif': 'image/gif',
  'png': 'image/png',
  'bmp': 'image/bmp',
  'tif': 'image/tiff',
  'tiff': 'image/tiff',
  'ico': 'image/x-icon',

  // Video formats
  'asf': 'video/x-ms-asf',
  'asx': 'video/x-ms-asf',
  'wmv': 'video/x-ms-wmv',
  'wmx': 'video/x-ms-wmx',
  'wm': 'video/x-ms-wm',
  'avi': 'video/avi',
  'divx': 'video/divx',
  'flv': 'video/x-flv',
  'qt': 'video/quicktime',
  'mov': 'video/quicktime',
  'mpe': 'video/mpeg',
  'mpg': 'video/mpeg',
  'mpeg': 'video/mpeg',
  'mp4': 'video/mp4',
  'm4v': 'video/mp4',
  'ogv': 'video/ogg',
  'webm': 'video/webm',
  'mkv': 'video/x-matroska',

  // Text formats
  'txt': 'text/plain',
  'asc': 'text/plain',
  'c': 'text/plain',
  'cc': 'text/plain',
  'h': 'text/plain',
  'csv': 'text/csv',
  'tsv': 'text/tab-separated-values',
  'ics': 'text/calendar',
  'rtx': 'text/richtext',
  'css': 'text/css',
  'htm': 'text/html',
  'html': 'text/html',

  // Audio formats
  'mp3': 'audio/mpeg',
  'm4a': 'audio/mpeg',
  'm4b': 'audio/mpeg',
  'ram': 'audio/x-realaudio',
  'ra': 'audio/x-realaudio',
  'wav': 'audio/wav',
  'ogg': 'audio/ogg',
  'oga': 'audio/ogg',
  'mid': 'audio/midi',
  'midi': 'audio/midi',
  'wma': 'audio/x-ms-wma',
  'wax': 'audio/x-ms-wax',
  'mka': 'audio/x-matroska',

  // Misc application formats
  'rtf': 'application/rtf',
  'js': 'application/javascript',
  'pdf': 'application/pdf',
  'swf': 'application/x-shockwave-flash',
  'class': 'application/java',
  'tar': 'application/x-tar',
  'zip': 'application/zip',
  'gzip': 'application/x-gzip',
  'gz': 'application/x-gzip',
  'rar': 'application/rar',
  '7z': 'application/x-7z-compressed',
  'exe': 'application/x-msdownload',

  // MS Office formats
  'doc': 'application/msword',
  'ppt': 'application/vnd.ms-powerpoint',
  'pps': 'application/vnd.ms-powerpoint',
  'pot': 'application/vnd.ms-powerpoint',
  'wri': 'application/vnd.ms-write',
  'xla': 'application/vnd.ms-excel',
  'xls': 'application/vnd.ms-excel',
  'xlt': 'application/vnd.ms-excel',
  'xlw': 'application/vnd.ms-excel',
  'mdb': 'application/vnd.ms-access',
  'mpp': 'application/vnd.ms-project',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'docm': 'application/vnd.ms-word.document.macroEnabled.12',
  'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'dotm': 'application/vnd.ms-word.template.macroEnabled.12',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'xlsm': 'application/vnd.ms-excel.sheet.macroEnabled.12',
  'xlsb': 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
  'xltx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'xltm': 'application/vnd.ms-excel.template.macroEnabled.12',
  'xlam': 'application/vnd.ms-excel.addin.macroEnabled.12',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'pptm': 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
  'ppsx': 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  'ppsm': 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
  'potx': 'application/vnd.openxmlformats-officedocument.presentationml.template',
  'potm': 'application/vnd.ms-powerpoint.template.macroEnabled.12',
  'ppam': 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
  'sldx': 'application/vnd.openxmlformats-officedocument.presentationml.slide',
  'sldm': 'application/vnd.ms-powerpoint.slide.macroEnabled.12',
  'onetoc': 'application/onenote',
  'onetoc2': 'application/onenote',
  'onetmp': 'application/onenote',
  'onepkg': 'application/onenote',

  // OpenOffice formats
  'odt': 'application/vnd.oasis.opendocument.text',
  'odp': 'application/vnd.oasis.opendocument.presentation',
  'ods': 'application/vnd.oasis.opendocument.spreadsheet',
  'o dg': 'application/vnd.oasis.opendocument.graphics',
  'odc': 'application/vnd.oasis.opendocument.chart',
  'odb': 'application/vnd.oasis.opendocument.database',
  'odf': 'application/vnd.oasis.opendocument.formula',

  // WordPerfect formats
  'wp': 'application/wordperfect',
  'wpd': 'application/wordperfect',

  // iWork formats
  'key': 'application/vnd.apple.keynote',
  'numbers': 'application/vnd.apple.numbers',
  'pages': 'application/vnd.apple.pages'
};

var netWrokError = "网络连接失败,请检查网络设置";
var timeOutError = "您长时间未操作,请重新登录";

function getExt(name){
  //return string.split('.').pop();
  if(name.lastIndexOf('.')>0)
    return name.substring(name.lastIndexOf('.')+1,name.length)
  else return '';
}

function getMimeByExt(ext) {
  ext = ext.toLowerCase();
  if (mimes.hasOwnProperty(ext)) {
    return mimes[ext];
  }
  return false;
}

function xuanzhuan(id){
  console.log(id)
  if (!$("#"+id).hasClass("sh")) {
    $("#"+id).addClass("sh");
  } else {
    $("#"+id).removeClass("sh");
  }

}

function GetQueryString(url,name) {
     var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(&|$)");
     var r = url.match(reg);
     if(r!=null)return  unescape(r[2]); return '';
}

Array.prototype.contains1 = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
}
Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
}
function getArrayStr(arr){
  if(arr==undefined||arr==null){
    return '';
  }
  var r='';
  for(var i=0;i<arr.length;i++){
    r+=(arr[i]+',')
  }
  if(r.length>0){
    r= r.substring(0, r.length-1);
  }
  return r;
}
Array.prototype.addOrRemove = function(obj) {
  var flag=-1;
  var arr=[];
  for(var i=0;i<this.length;i++) {
    if (this[i].indexOf(obj)==0) {
      flag=i;
    }else{
      arr.push(this[i]);
    }
  }
  if(flag==-1){arr.push(obj)}
  console.log(arr);
  return arr;
}
Array.prototype.deleteElementByValueId = function(varElement)
{

  var numDeleteIndex = -1;
  for (var i=0; i<this.length; i++)
  {

    // 严格比较，即类型与数值必须同时相等。
    if (this[i].id === varElement.id)
    {
      this.splice(i, 1);
      numDeleteIndex = i;
      break;
    }
  }
  return numDeleteIndex;
}
function isNull(str){
  if(str==undefined||str==null||str==''||str=='null'||str==[])
    return true;
  else return false;
}
function notNull(str){
  if(str==undefined||str==null||str==''||str=='null')
    return '';
  else return str;
}
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
  if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
    return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
  } else {
    return this.replace(reallyDo, replaceWith);
  }
}

angular.module('app.controllers', ['ionic', 'app.services', 'app.directives','ngCordova', 'angular-storage'])
  .filter('to_trusted', ['$sce', function($sce){
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }])
  .controller('splashCtrl', function($ionicPlatform,$scope, $state,$window,DataService,$rootScope,store,$cordovaAppVersion,$http) {
    $scope.initSplash = function(){
      //$rootScope.showAlert(ionic.Platform.platform());
      try{
        $ionicPlatform.ready(function () {
          if (window.cordova) {
            var updateurl = "";

            $cordovaAppVersion.getVersionNumber().then(function (version) {
              updateurl = serviceurl + 'common.jsp?cmd=getVersion&v=' + version + '&t=' + ionic.Platform.platform();

              $http({
                url: updateurl,
                method: 'get',
                timeout : 5000
              })
                .success(function (obj) {
                  //$rootScope.showAlert(JSON.stringify(obj));
                  if(obj.status!=undefined && obj.status==200 && obj.updateStatus){
                    $rootScope.confirmUpdateApp(obj.newVersion,obj.url);
                  }else{
                    if(isNull(store.get('newuser'))){
                      store.set('newuser','true');
                      $state.go("welcome");
                    }else {
                      $state.go("login");
                    }
                  }
                })
                .error(function (data, status, headers, config) {
                  $rootScope.showAlert('读取版本信息失败');
                });
            });
          }else{
          	// 浏览器直接访问
          	$state.go("login");
          }
        });
      }catch(e){
        $rootScope.showAlert(e);
      }


    }
  })
  .controller('welcomeCtrl', function($scope, $window, $state,$rootScope) {
    $scope.initSwiper = function() {
      var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        autoplay : 3000,
        onTransitionEnd: function(swiper){
           if(swiper.isEnd){
           //setTimeout($state.go("login"),2999);
           $state.go("login");
           }
        }
      })
    }
    $scope.gotologin = function(){
      $state.go("login");
    }
  })

  .controller('loginCtrl', function($scope, $window, $state,DataService,$rootScope) {
    $scope.user={};
    $scope.dologin = function() {
      if (isNull($scope.user.userid)) {
        $rootScope.showAlert('用户名不能为空');
      } else if (isNull($scope.user.password)) {
        $rootScope.showAlert('密码不能为空');
      } else {
        DataService.getSSOLogin($scope.user.userid, $scope.user.password).success(function (response) {
          if (response.status === 200) {
            $window.sessionStorage.setItem('userid',$scope.user.userid);
            $window.sessionStorage.setItem('sid',response.sid);
            $scope.user={};
            $state.go("home");
          }else if(response.status==undefined){//add time out
	        	$rootScope.showAlertToLogin(timeOutError);
	        }else{
            $rootScope.showAlert(response.errmsg);
          }
        }).error(function(data,state){
          $rootScope.showAlertToLogin(netWrokError);
        });
      }
    }

    $scope.saveduserlogininfo = function() {
      $window.sessionStorage.setItem('saveduserlogininfo',$scope.user);
    }


    $scope.$on('$ionicView.beforeEnter', function() {
      if(!isNull($window.sessionStorage.getItem('saveduserlogininfo'))){
        $scope.user=$window.sessionStorage.getItem('saveduserlogininfo');
      }
    });
    $scope.forgetPwd = function() {
      if (isNull($scope.user.userid)) {
        $rootScope.showAlert('用户名不能为空');
      } else if (isNull($scope.user.password)) {
        DataService.forgotPwd($scope.user.userid).success(function (response) {
          if (response.status === 200) {
            $rootScope.showAlert('密码已发送到您的邮箱，请查收。');
          } else {
            $rootScope.showAlert(response.errmsg);
          }
        }).error(function (data, state) {
          $rootScope.showAlertToLogin(netWrokError);
        });
      }

    }

  })

  .controller('homeCtrl', function($scope, $window, $state,$rootScope,$ionicPopup) {
    $scope.initSwiper = function() {
    	// 特殊处理
    	var loginurl = window.location+"";
    	if(loginurl.indexOf("?")!=-1){
    		var userid = GetQueryString(loginurl,'userid');
    		var sid = GetQueryString(loginurl,'sid');
    		if(userid != '' && sid != ''){
    			$window.sessionStorage.setItem('userid',userid);
	        $window.sessionStorage.setItem('sid',sid);
	        $scope.user={};
    		}
    	}
    	
      // 正常初始化
      var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        autoplay : 3000,
        onTransitionEnd: function(swiper){

        }
      })
    }
    $rootScope.gototasklist = function(type) {
      $window.sessionStorage.setItem('type',type);
      $state.go("list");
    }
    $rootScope.gotoim = function() {
      var url="http://www.sobot.com/chat/h5/index.html?sysNum=9462a8e23bda426c8e87397de824cf2e&source=2";
      window.open(url, '_blank','location=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
    }
    $rootScope.dologout = function(type) {

      var msgpopup = $ionicPopup.alert({
        title: '<font>确认注销？</font>',
        scope: $rootScope,
        buttons: [
          {
            text: '<font color="#fff">确定</font>',
            type: 'button-clear',
            onTap: function (e) {
              $window.sessionStorage.removeItem('comment');
              $window.sessionStorage.removeItem('selecteduserlist');
              $window.sessionStorage.removeItem('addapprovecomment');
              $window.sessionStorage.removeItem('addselecteduserlist');
              $window.sessionStorage.removeItem('saveduserlogininfo');
              $window.sessionStorage.removeItem('detailjson');
              $window.sessionStorage.removeItem('nodeId');
              $window.sessionStorage.removeItem('processId');
              $window.sessionStorage.removeItem('sid');
              $window.sessionStorage.removeItem('taskId');
              $window.sessionStorage.removeItem('taskTypeId');
              $window.sessionStorage.removeItem('taskStatus');
              $window.sessionStorage.removeItem('type');
              $window.sessionStorage.removeItem('userid');
              $window.sessionStorage.removeItem('processaction');
              $window.sessionStorage.removeItem('processactiontext');
              $state.go("login");
              msgpopup.close();
            }
          },
        	{
            text: '<font color="#fff">取消</font>',
            type: 'button-clear',
            onTap: function (e) {
              msgpopup.close();
            }
          }

        ]
      });



    }
  })
  .controller('meCtrl', function($scope, $window, $state,DataService,$rootScope,$ionicPlatform,$cordovaAppVersion) {
    $scope.showDefaultPhoto=true;
    $scope.$on('$ionicView.beforeEnter', function() {

      $ionicPlatform.ready(function () {
        if (window.cordova) {
          $cordovaAppVersion.getVersionNumber().then(function (version) {
            $scope.appversion = version;
          });
        }
      });

      var sid = $window.sessionStorage.getItem('sid');
      $scope.userinfo={};
      if (!isNull(sid)) {
        DataService.getMyInfo(sid).success(function (response) {
          if (response.status === 200) {
            if(!isNull(response.photoUrl)){
              $scope.photoUrl = downloadurl+response.photoUrl;
              $scope.showDefaultPhoto=false;
            }
            $scope.userinfo = response;
          }else if(response.status==undefined){//add time out
	        	$rootScope.showAlertToLogin(timeOutError);
	        }else{
            $rootScope.showAlert(response.errmsg);
          }
        }).error(function(data,state){
          $rootScope.showAlertToLogin(netWrokError);
        });
      }

    });
  })

  .controller('searchCtrl', function($scope,$rootScope) {

  })

  .controller('listCtrl', function($scope, $window, $state,DataService,$ionicScrollDelegate,$rootScope) {
    $scope.size=10;
    $scope.page=1;
    $scope.maxpage=1;

    $scope.keyPressed = function(keyEvent) {
      if (keyEvent.keyCode == 13) {
        $scope.searchdata();
      }
    };

    $scope.showList = function (){return notNull($window.sessionStorage.getItem('type'))=='0'}
    $scope.canLoadMore = function () {
      if($scope.maxpage>$scope.page)
        return true;
      else return false;
    }
    $scope.broadcastFinishEvent = function (result) {
      $scope.items=$scope.items.concat(result);
      console.log($scope.items.length);
      setTimeout(function () {
      $scope.$broadcast('scroll.infiniteScrollComplete');
	   }, 500);
    }

    $scope.loadMore = function () {
      $scope.page+=1;
      $scope.getTaskListFunc($scope.size,$scope.page,$scope.broadcastFinishEvent);

    }
    $scope.searchdata = function () {
      $scope.page=1;
      $scope.getTaskListFunc($scope.size,$scope.page,$scope.scrollTop);
    }
    $scope.scrollTop = function(result) {
      $scope.items=result;
      $scope.$broadcast('scroll.refreshComplete');
      $ionicScrollDelegate.scrollTop(true);
      $ionicScrollDelegate.resize();

    };
    $scope.clickItem = function (item,index) {
     // $rootScope.showLoading();
      $window.sessionStorage.removeItem('comment');
      $window.sessionStorage.removeItem('selecteduserlist');
      $window.sessionStorage.removeItem('addapprovecomment');
      $window.sessionStorage.removeItem('addselecteduserlist');
      $window.sessionStorage.removeItem('saveduserlogininfo');
      $window.sessionStorage.removeItem('detailjson');
      $window.sessionStorage.removeItem('nodeId');
      $window.sessionStorage.removeItem('processId');
      $window.sessionStorage.removeItem('taskId');
      $window.sessionStorage.removeItem('taskTypeId');
      $window.sessionStorage.removeItem('taskStatus');
      $window.sessionStorage.removeItem('processaction');
      $window.sessionStorage.removeItem('processactiontext');

      $window.sessionStorage.setItem('taskId',item.taskId);
      $window.sessionStorage.setItem('taskTypeId',item.taskTypeId);
      $window.sessionStorage.setItem('nodeId', item.nodeId);
      $window.sessionStorage.setItem('processId', item.processId);
      $window.sessionStorage.setItem('taskStatus', item.taskStatus);

      DataService.getTaskDetail(notNull($window.sessionStorage.getItem('sid')),'',notNull($window.sessionStorage.getItem('taskId')),notNull($window.sessionStorage.getItem('taskTypeId')),notNull($window.sessionStorage.getItem('nodeId')),notNull($window.sessionStorage.getItem('type'))).success(function (response) {

        if(response.status=="200"){
          $scope.content = response;
          $window.sessionStorage.setItem('detailjson',JSON.stringify($scope.content));
          $state.go("detail");
        }else if(response.status==undefined){//add time out
	        	$rootScope.showAlertToLogin(timeOutError);
	      }else{
          $rootScope.showAlert(response.errmsg);
        }
        //$rootScope.hideLoading();
      }).error(function(data,state){
        //$rootScope.hideLoading();
        $rootScope.showAlertToLogin(netWrokError);
      });
    }

    $scope.getTaskListFunc=function(size,page,callback){
      //$rootScope.showLoading();
      
      
      
      
      if(page===-100){
        page=1;
        $scope.showLoading=true;
      }

      DataService.getTaskList(notNull($window.sessionStorage.getItem('sid')),'',notNull($window.sessionStorage.getItem('type')),size,page,notNull($('#searchtxt').val())).success(function (response) {

        if (response.status === 200) {
          callback(response.data);
          $scope.maxpage=response.pageCount;
        }else if(response.status==undefined){//add time out
        	$rootScope.showAlertToLogin(timeOutError);
        }else{
          $rootScope.showAlert(response.errmsg);
        }
        //$rootScope.hideLoading();
        $scope.showLoading=false;
      }).error(function(data,state){
        //$rootScope.hideLoading();
        $scope.showLoading=false;
        $rootScope.showAlertToLogin(netWrokError);
      });

    }

    $scope.$on('$ionicView.beforeEnter', function() {
    	
    	
    	// 特殊处理
    	var loginurl = window.location+"";
    	if(loginurl.indexOf("?")!=-1){
    		var userid = GetQueryString(loginurl,'userid');
    		var sid = GetQueryString(loginurl,'sid');
    		if(userid != '' && sid != ''){
    			$window.sessionStorage.setItem('userid',userid);
	        $window.sessionStorage.setItem('sid',sid);
	        $scope.user={};
    		}
    		
        var type=GetQueryString(loginurl,'type');
        $window.sessionStorage.setItem('type',type);
        
        $window.sessionStorage.removeItem("detailjson");
	      $scope.type=type;
        $scope.page=1;
	      if (!isNull(sid)) {
	        $scope.getTaskListFunc($scope.size,$scope.page,$scope.scrollTop);
	      }
        
      }else{
      	// 正常
      	
      	var sid = $window.sessionStorage.getItem('sid');
	      $window.sessionStorage.removeItem("detailjson");
	      $scope.type = $window.sessionStorage.getItem('type');
	      $scope.page=1;
	      if (!isNull(sid)) {
	        $scope.getTaskListFunc($scope.size,$scope.page,$scope.scrollTop);
	      }
      }
      
    });
  })

  .controller('detailCtrl', function($scope, $window, $state,DataService,$rootScope,$ionicScrollDelegate,$cordovaFileTransfer,$cordovaFileOpener2) {

    $scope.showList = function (){
      var jsonObj=JSON.parse( $window.sessionStorage.getItem('detailjson'));
      return notNull($window.sessionStorage.getItem('type'))=='0'&&notNull($window.sessionStorage.getItem('taskStatus'))!='4'&&jsonObj.onlyPc!=true;
    }

    $scope.$on('$ionicView.afterEnter', function() {
    	
    	// 特殊处理
    	var loginurl = window.location+"";
    	if(loginurl.indexOf("?")!=-1){
    		var userid = GetQueryString(loginurl,'userid');
    		var sid = GetQueryString(loginurl,'sid');
    		if(userid != '' && sid != ''){
    			$window.sessionStorage.setItem('userid',userid);
	        $window.sessionStorage.setItem('sid',sid);
	        $scope.user={};
    		}
    		
    		
    		var taskId=GetQueryString(loginurl,'taskId');
        var taskTypeId=GetQueryString(loginurl,'taskTypeId');
        var nodeId=GetQueryString(loginurl,'nodeId');
        var type=GetQueryString(loginurl,'type');
        
        DataService.getTaskDetail(sid,'',taskId,taskTypeId,nodeId,type).success(function (response) {

	        if(response.status=="200"){
	          $scope.content = response;
	          $window.sessionStorage.setItem('detailjson',JSON.stringify($scope.content));
	          
	          // start
	          $scope.showLoading=true;
			      $scope.content = JSON.parse( $window.sessionStorage.getItem('detailjson'));
			
			      if($scope.content.onlyPc===true){
			        $rootScope.showAlert($scope.content.onlyPcMsg);
			      }
			      $scope.showLoading=false;
		        // end
		        
		        // add 1
		        if(notNull(type)=='0'&&notNull($scope.content.taskStatus)!='4'&&$scope.content.onlyPc!=true){
		        	$("#nextTd").show();
		        }else{
		        	$("#nextTd").hide();
		        }
		        // add 1 end
		        
	        }
	      }).error(function(data,state){
	        $rootScope.showAlertToLogin(netWrokError);
	      });
    	}else{
    		//正常
    		 	$scope.showLoading=true;
		      $scope.content = JSON.parse( $window.sessionStorage.getItem('detailjson'));
		
		      if($scope.content.onlyPc===true){
		        $rootScope.showAlert($scope.content.onlyPcMsg);
		      }
		      $scope.showLoading=false;
		      
		      // add 2
	        if(notNull($window.sessionStorage.getItem('type'))=='0'&&notNull($scope.content.taskStatus)!='4'&&$scope.content.onlyPc!=true){
	        	$("#nextTd").show();
	        }else{
	        	$("#nextTd").hide();
	        }
	        // add 2 end
    		
    		//正常 - end
    	}
    	
    	
    	// on 结束
    })

    $scope.gotolist = function() {
      $state.go('list');
    };
    $scope.activecontent=new Array();
    $scope.doActive = function(str) {
      $scope.activecontent=$scope.activecontent.addOrRemove(str)
      $("#"+str).slideToggle("1000",function(){
        $ionicScrollDelegate.resize()
      });
      xuanzhuan('icon-'+str)
    }

    $scope.isListContain = function (arr,value) {
      arr=eval(arr);
      if(arr=='')
        arr=[];
      if(arr!=undefined&&arr!=null&&arr!='null')
        return arr.contains1(value);
      else return false;
    }

    $scope.OpenAttachLink = function (link,name) {
      document.addEventListener('deviceready', function () {
        //var url = downloadurl+decodeURIComponent(link);
        var url = downloadurl+link;
        var d=new Date()
        var ext = getExt(name);
        var type = getMimeByExt(ext);
        var targetPath = 'cdvfile://localhost/persistent/' + d.getTime()+"-"+Math.floor(Math.random()*1000)+name;
        var trustHosts = true
        var options = {};
        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
          .then(function(result) {
            $cordovaFileOpener2.open(
              targetPath,
              type
            ).then(function() {

              }, function(err) {
                $rootScope.showAlert('请安装合适的程序来打开此文件');
              });

          }, function(err) {
            $rootScope.showAlert('文件下载失败');
          }, function (progress) {
          });
      }, false);
    }

  })

  .controller('addApproverCtrl', function($scope, $window, $state,DataService,$rootScope){

   $scope.checkText = function() {
          if(document.getElementById('comment').value.length>500){
             $rootScope.showAlert("审批意见最多500字！");
             document.getElementById('comment').value=document.getElementById('comment').value.substr(0,500);
          }
        };
    $scope.selecteduserlist=[];
    $scope.$on('$ionicView.beforeEnter', function() {
      $scope.isSending=false;
       //修改标题名称 $window.sessionStorage.setItem('processactiontext','前加签');
     if (!isNull($window.sessionStorage.getItem('processactiontext'))) {
      document.getElementById('approveTitle').innerHTML = $window.sessionStorage.getItem('processactiontext');
      }else{
       document.getElementById('approveTitle').innerHTML='转发1';
      }
      if (!isNull($window.sessionStorage.getItem('addapprovecomment'))) {
        document.getElementById('comment').value = $window.sessionStorage.getItem('addapprovecomment');
      }

      if (!isNull($window.sessionStorage.getItem('selecteduserlist'))) {
        $scope.selecteduserlist = JSON.parse($window.sessionStorage.getItem('selecteduserlist'));
      }
      if (!isNull($window.sessionStorage.getItem('addselecteduserlist'))) {
        var addselecteduserlist = JSON.parse($window.sessionStorage.getItem('addselecteduserlist'));
        for(var i=0;i<addselecteduserlist.length;i++){
          if(!$scope.selecteduserlist.contains(addselecteduserlist[i])){
            $scope.selecteduserlist.push(addselecteduserlist[i])
          }
        }
        $window.sessionStorage.removeItem('addselecteduserlist');
      }
      if($scope.selecteduserlist.length>0){
        $window.sessionStorage.setItem('selecteduserlist',JSON.stringify( $scope.selecteduserlist));
      }else{
        $window.sessionStorage.removeItem('selecteduserlist');
      }

    })

    $scope.gotouserlist = function() {
      if (!isNull(document.getElementById('comment').value)) {
        $window.sessionStorage.setItem('addapprovecomment',notNull(document.getElementById('comment').value));
      }
      $window.sessionStorage.setItem('approverlistfrom','addApprover');
      $state.go('approverlist');
    };

    $scope.removeuser = function(obj) {
      $scope.selecteduserlist.deleteElementByValueId(JSON.parse(obj));
      if($scope.selecteduserlist.length>0){
        $window.sessionStorage.setItem('selecteduserlist',JSON.stringify($scope.selecteduserlist));
      }else{
        $window.sessionStorage.removeItem('selecteduserlist');
      }
    };

    $scope.appendTask=function(){
      var sid = $window.sessionStorage.getItem('sid');
      var participant='';
      if (!isNull($window.sessionStorage.getItem('selecteduserlist'))) {
        var selecteduserlist = JSON.parse($window.sessionStorage.getItem('selecteduserlist'));
        for(var i=0;i<selecteduserlist.length;i++){
          participant=participant+','+selecteduserlist[i].userId;
        }
        if(participant.indexOf(',')>=0)
          participant=participant.substr(1,participant.length);
      }
      if(notNull(participant)){
        if($scope.isSending===false){
          $scope.isSending=true;
          DataService.appendTask(sid, '',notNull($window.sessionStorage.getItem('taskId')),notNull($window.sessionStorage.getItem('processId')),participant,document.getElementById('comment').value,notNull($window.sessionStorage.getItem('processaction'))).success(function (response) {
            if (response.status === 200) {
              $window.sessionStorage.removeItem('addapprovecomment');
              $window.sessionStorage.removeItem('addselecteduserlist');
              $window.sessionStorage.removeItem('selecteduserlist');
              $state.go('approveresult');
              $scope.isSending=false;
            }else if(response.status==undefined){//add time out
			        	$rootScope.showAlertToLogin(timeOutError);
			      }else{
              $rootScope.showAlert(response.errmsg);
              $scope.isSending=false;
            }
          }).error(function(data,state){
            $rootScope.showAlertToLogin(netWrokError);
            $scope.isSending=false;
          });
        }else{
          console.log('重复点击');
        }

      }else{
        $rootScope.showAlert('请选择审批人');
      }
    }
  })

  .controller('approverlistCtrl', function($scope, $window, $state,DataService,$rootScope) {
    $scope.users=[];
    $scope.size=10;
    $scope.page=1;
    $scope.maxpage=1;
    $scope.successCallBack=function(data){
      $scope.users=$scope.users.concat(data);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    $scope.searchCallBack=function(data){
      $scope.users=data;
    }


    $scope.getUserList=function(query,size,page,successCallBack,selectedUsers,userId){
      var sid = $window.sessionStorage.getItem('sid');

      DataService.getUserList(sid, '',query,size,page,selectedUsers,userId).success(function (response) {
        if (response.status === 200) {
          $scope.maxpage=response.total/$scope.size;
          successCallBack(response.data)
        }else if(response.status==undefined){//add time out
	        	$rootScope.showAlertToLogin(timeOutError);
	      }else{
          $rootScope.showAlert(response.errmsg);
        }
      }).error(function(data,state){
        $rootScope.showAlertToLogin(netWrokError);
      });
    }
    $scope.keyPressed = function(keyEvent) {
      if (keyEvent.keyCode == 13) {
        $scope.searchdata();
      }
    };
    $scope.searchdata=function(){
      $scope.page=1;
      $scope.getUserList($('#searchtxt').val(),$scope.size,$scope.page,$scope.searchCallBack,$window.sessionStorage.getItem('selecteduserlist'),$window.sessionStorage.getItem('userId'));
    }

    $scope.canLoadMore = function () {
      if($scope.maxpage>$scope.page)
        return true;
      else return false;
    }
    $scope.loadMore = function () {
      $scope.page+=1;
      $scope.getUserList($('#searchtxt').val(),$scope.size,$scope.page,$scope.successCallBack,$window.sessionStorage.getItem('selecteduserlist'),$window.sessionStorage.getItem('userId'));

    }
    $scope.confirmselect=function(){

      var chk_value =[];
      $('input[name="selectuser"]:checked').each(function(){
        chk_value.push($(this).val());
      });

      var addselecteduserlist=[];
      for(var i=0;i<$scope.users.length;i++){
        if(chk_value.contains($scope.users[i].userId))
          addselecteduserlist.push($scope.users[i]);
      }
      $window.sessionStorage.setItem('addselecteduserlist',JSON.stringify(addselecteduserlist));
      if(notNull($window.sessionStorage.getItem('approverlistfrom'))){
        $state.go(notNull($window.sessionStorage.getItem('approverlistfrom')));
      }

    }
    $scope.goback=function(){
      if(notNull($window.sessionStorage.getItem('approverlistfrom'))){
        $state.go(notNull($window.sessionStorage.getItem('approverlistfrom')));
      }

    }

    $scope.$on('$ionicView.beforeEnter', function() {
      $scope.size=10;
      $scope.page=1;
      $scope.maxpage=1;
      $scope.users=[];
      if($window.sessionStorage.getItem('approverlistfrom')=='confirmapprove'){
        var userList=new Array();
      if(notNull($window.sessionStorage.getItem('cacheuserlist'))){
        var users=JSON.parse($window.sessionStorage.getItem('cacheuserlist'));
        for(var i=0;i<users.length;i++){
          userList.push({'userId':users[i].key});
        }
      }
        $scope.getUserList('',10,1,$scope.successCallBack,JSON.stringify(userList),$window.sessionStorage.getItem('userId'));
      }else if($window.sessionStorage.getItem('approverlistfrom')=='addApprover'){
       $scope.getUserList('',10,1,$scope.successCallBack,$window.sessionStorage.getItem('selecteduserlist'),$window.sessionStorage.getItem('userId'));
      }else{
       $rootScope.showAlert('not approverlistfrom ');
      }
    });
  })
  .controller('approveCtrl', function($scope, $window, $state,DataService,$ionicActionSheet,$ionicPopup,$rootScope){

    $scope.$on('$ionicView.beforeEnter', function() {
      $window.sessionStorage.removeItem('addselecteduserlist');
      $window.sessionStorage.removeItem('selecteduserlist');
      $window.sessionStorage.removeItem('cacheuserlist');
    });

     $scope.checkText = function() {
        if(document.getElementById('comment').value.length>500){
           $rootScope.showAlert("审批意见最多500字！");
           document.getElementById('comment').value=document.getElementById('comment').value.substr(0,500);
        }
      };

    $scope.content = JSON.parse( $window.sessionStorage.getItem('detailjson'));
    $scope.taskStatus = $scope.content.taskStatus;
    var actions=$scope.content.myMenu.actions;

    if(notNull($window.sessionStorage.getItem('comment'))){
      document.getElementById('comment').value=notNull($window.sessionStorage.getItem('comment'));
    }

    var rejectbutton = new Array();
    if(!isNull(actions)){
      for(var i=1;i<actions.length;i++){
        rejectbutton.push({ text: '<font>'+actions[i].key+'</fon>' })
      }
    }
    $scope.reply =function(){

      $window.sessionStorage.setItem('comment',document.getElementById('comment').value);

      if(isNull(document.getElementById('comment').value)) {
        $rootScope.showAlert('请填写审批意见');
      }else{
        var alertPopup = $ionicPopup.alert({
          title: '<font>确认回复？</font>',
          buttons: [
            {
              text: '<font>确定</font>',
              type: 'button-clear',
              onTap: function(e) {
                DataService.assignTask($window.sessionStorage.getItem('sid'), '',notNull($window.sessionStorage.getItem('taskId')),notNull($window.sessionStorage.getItem('processId')),document.getElementById('comment').value).success(function (response) {
                  if (response.status === 200) {
                    $state.go('approveresult');
                  }else if(response.status==undefined){//add time out
						        	$rootScope.showAlertToLogin(timeOutError);
						      }else{
                    $rootScope.showAlert(response.errmsg);
                  }

                }).error(function(data,state){
                  $rootScope.showAlertToLogin(netWrokError);
                });
              }
            },
            { text: '<font>取消</font>',
              type: 'button-clear',
              onTap: function(e) {

              }
            }
          ]
        });
      }
    }

    $scope.approve =function(){
      if(isNull(actions)){
        $window.sessionStorage.setItem('processaction','');
        $window.sessionStorage.setItem('processactiontext','同意');
      }else{
        $window.sessionStorage.setItem('processaction',actions[0].value);
        $window.sessionStorage.setItem('processactiontext',actions[0].key);
      }
      $window.sessionStorage.setItem('comment',document.getElementById('comment').value);
      $state.go('confirmapprove');
    }

    $scope.show = function(str) {
      $window.sessionStorage.setItem('comment',document.getElementById('comment').value);
      if(str==="add"){
        var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: '<font color="#f1730b">前加签</fon>' },
            { text: '<font color="#f1730b">直接转发</fon>' }
          ],
          destructiveText: '',
          titleText: '',
          cancelText: '<font color="#f1730b">取消</fon>',
          cancel: function() {
            hideSheet();
          },
          buttonClicked: function(index) {
            if(index===0){
              $window.sessionStorage.setItem('processaction','add0');
              $window.sessionStorage.setItem('processactiontext','前加签');
            }
            if(index===1){
              $window.sessionStorage.setItem('processaction','add1');
              $window.sessionStorage.setItem('processactiontext','直接转发');
            }
            $window.sessionStorage.setItem('comment',document.getElementById('comment').value);
            $state.go('addApprover');
            return true;
          }
        });
      }
      if(str==="reject"){
        if(rejectbutton.length>1){
          var hideSheet = $ionicActionSheet.show({
            buttons:rejectbutton ,
            destructiveText: '',
            titleText: '',
            cancelText: '<font color="#f1730b">取消</fon>',
            cancel: function() {
              hideSheet();
            },
            buttonClicked: function(index) {
              if(isNull(document.getElementById('comment').value)){
                $rootScope.showAlert('请填写审批意见');
                hideSheet();
              }else{
                $window.sessionStorage.setItem('processaction',actions[index+1].value);
                $window.sessionStorage.setItem('processactiontext',actions[index+1].key);
                $window.sessionStorage.setItem('comment',document.getElementById('comment').value);
                $state.go('confirmapprove');
              }
              return;
            }
          });
        }else if(rejectbutton.length===1){
          if(isNull(document.getElementById('comment').value)){
            $rootScope.showAlert('请填写审批意见');
          }else {
            $window.sessionStorage.setItem('processaction', actions[1].value);
            $window.sessionStorage.setItem('processactiontext', actions[1].key);
            $window.sessionStorage.setItem('comment', document.getElementById('comment').value);
            $state.go('confirmapprove');
          }
        }else{
          $rootScope.showAlert('未配置驳回操作');
        }
      }
    };
  })

  .controller('confirmapproveCtrl', function($scope, $window, $state,DataService,$rootScope) {
    $scope.showview=false;
    $scope.content={};
    $scope.selecteduser=new Array();
    $scope.processactiontext=$window.sessionStorage.getItem('processactiontext');

    $scope.showAddUser=false;

    $scope.gotouserlist = function() {
      $window.sessionStorage.setItem('approverlistfrom','confirmapprove');

      $window.sessionStorage.setItem('cacheuserlist',JSON.stringify($scope.content.approverList));
      $window.sessionStorage.setItem('cacheselecteduserlist',JSON.stringify($scope.selecteduser));

      $state.go('approverlist');
    };


    $scope.getUserCss=function(user){
      if($scope.selecteduser.contains(user)){
        return 'l_box on';
      }else{
        return 'l_box off';
      }
    }
    $scope.clickUser=function(user){
      if($scope.content.approverEditable)
        $scope.selecteduser=$scope.selecteduser.addOrRemove(user);
    }

    $scope.$on('$ionicView.beforeEnter', function() {

      var sid = $window.sessionStorage.getItem('sid');
      $scope.isSending=false;
      if (!isNull(sid)) {
        DataService.executeTask(sid, '',notNull($window.sessionStorage.getItem('taskId')),notNull($window.sessionStorage.getItem('processId')),notNull($window.sessionStorage.getItem('processaction')),notNull($window.sessionStorage.getItem('comment'))).success(function (response) {
          if (response.status === 200) {
            $scope.content=response;
            if($scope.content.approverList.length===0){
              //$rootScope.showAlertToList('该节点需要选择审批人，需到PC端处理');
              $scope.showAddUser=true;
              var userarr = new Array();
              if(notNull($window.sessionStorage.getItem('cacheuserlist'))){
                var tmpuserarr = JSON.parse($window.sessionStorage.getItem('cacheuserlist'));
                var tmpselecteduserarr = JSON.parse($window.sessionStorage.getItem('cacheselecteduserlist'));
                for(var k=0;k<tmpuserarr.length;k++){
                  $scope.content.approverList.push({'key':tmpuserarr[k].key,'value':tmpuserarr[k].value});
                  //console.log(tmpselecteduserarr);
                  if(tmpselecteduserarr.contains("{\"key\":\""+tmpuserarr[k].key+"\",\"value\":\""+tmpuserarr[k].value+"\"}"))
                    $scope.clickUser(JSON.stringify({'key':tmpuserarr[k].key,'value':tmpuserarr[k].value}));
                }
              }
              if(notNull($window.sessionStorage.getItem('addselecteduserlist'))){
                var tmpuserarr = JSON.parse($window.sessionStorage.getItem('addselecteduserlist'));
                console.log($scope.selecteduser);
                for(var k=0;k<tmpuserarr.length;k++){
                 var tmpselecteduserarr = JSON.parse($window.sessionStorage.getItem('cacheselecteduserlist'));
                  if(!tmpselecteduserarr.contains("{\"key\":\""+tmpuserarr[k].userId+"\",\"value\":\""+tmpuserarr[k].userName+"\"}")){
                    $scope.content.approverList.push({'key':tmpuserarr[k].userId,'value':tmpuserarr[k].userName});
                    $scope.clickUser(JSON.stringify({'key':tmpuserarr[k].userId,'value':tmpuserarr[k].userName}));
                  }
                }
              $window.sessionStorage.removeItem('addselecteduserlist');
              }

              //$scope.content.approverList=userarr;

            }else{
              if($scope.content.approverEditable){
                if($scope.content.approverList.length===1){
                  $scope.clickUser(JSON.stringify($scope.content.approverList[0]));
                }
              }else{
                console.log($scope.content.approverList.length);
                if($scope.content.approverList.length>0){
                  for(var u=0;u<$scope.content.approverList.length;u++){
                    console.log($scope.content.approverList[u]);
                    $scope.selecteduser=$scope.selecteduser.addOrRemove(JSON.stringify($scope.content.approverList[u]));
                  }
                }
              }
            }
            $scope.showview=true;
          }else if (response.status === 201) {
            $state.go('approveresult');
          }else if(response.status==undefined){//add time out
		        	$rootScope.showAlertToLogin(timeOutError);
		      }else{
            $rootScope.showAlertToList(response.errmsg);
          }
        }).error(function(data,state){
          $rootScope.showAlertToLogin(netWrokError);
        });
      }
    });

    $scope.processTask=function(){
      var sid = $window.sessionStorage.getItem('sid');
      var participant='';
      if (!isNull($scope.selecteduser)) {
        var selecteduserlist = $scope.selecteduser;
        for(var i=0;i<selecteduserlist.length;i++){
          participant=participant+','+JSON.parse(selecteduserlist[i]).key;
        }
        if(participant.indexOf(',')>=0)
          participant=participant.substr(1,participant.length);
      }
      if(!isNull(participant)){
        if($scope.isSending===false){
          $scope.isSending=true;
          DataService.processTask(sid, '',notNull($window.sessionStorage.getItem('taskId')),notNull($window.sessionStorage.getItem('processId')),participant).success(function (response) {
            if (response.status === 200) {
              $window.sessionStorage.removeItem('addselecteduserlist');
              $window.sessionStorage.removeItem('selecteduserlist');
              $window.sessionStorage.removeItem('cacheuserlist');
              $state.go('approveresult');
              $scope.isSending=false;
            }else if(response.status==undefined){//add time out
			        	$rootScope.showAlertToLogin(timeOutError);
			      }else{
              $rootScope.showAlert(response.errmsg);
              $scope.isSending=false;
            }
          }).error(function(data,state){
            $scope.isSending=false;
            $rootScope.showAlertToLogin(netWrokError);
          });
        }else{
          console.log('重复点击');
        }
      }else{
        $rootScope.showAlert('请选择审批人');
      }
    }

  })

  .controller('historyCtrl', function($scope, $window, $state,DataService,$ionicScrollDelegate,$rootScope) {
    $scope.showList = function (){
      return notNull($window.sessionStorage.getItem('type'))=='0'&&notNull($window.sessionStorage.getItem('taskStatus'))!='4'&&$window.sessionStorage.getItem('detailjson').onlyPc!=true;
    }
    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop(true);
    };
    $scope.$on('$ionicView.beforeEnter', function() {
      var sid = $window.sessionStorage.getItem('sid');
      $scope.processId = $window.sessionStorage.getItem('processId');
      $scope.page=1;
      $scope.size=10;
      if (!isNull(sid)) {
        DataService.getTaskHistoryList(sid,'',$scope.processId,$scope.size,$scope.page).success(function (response) {
          if (response.status === 200) {
            $scope.content = response.data;
            $scope.scrollTop();
            $scope.maxpage=response.pageCount;
          }else if(response.status==undefined){//add time out
		        	$rootScope.showAlertToLogin(timeOutError);
		      }else{
            $rootScope.showAlert(response.errmsg);
          }
        }).error(function(data,state){
          $rootScope.showAlertToLogin(netWrokError);
        });
      }
    });
  })

  .controller('approveresultCtrl', function($scope,$rootScope) {

  })
  .controller('imCtrl', function($scope,$sce) {
    $scope.targetUrl=$sce.trustAsResourceUrl("http://www.sobot.com/chat/h5/index.html?sysNum=9462a8e23bda426c8e87397de824cf2e&source=2");
  })
