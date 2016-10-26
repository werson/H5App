// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','ngCordova', 'angular-storage'])

.run(function($ionicPlatform,$ionicPopup,$rootScope,$state,$ionicHistory,$ionicScrollDelegate,$timeout,$ionicLoading,$cordovaFileTransfer,$cordovaFileOpener2,store) {
// PhoneGap加载完毕

    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
      if (window.cordova && window.cordova.InAppBrowser) {
        window.open = window.cordova.InAppBrowser.open;
      }
    ionic.Platform.isFullScreen = false;

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      //StatusBar.hide();
      //StatusBar.overlaysWebView(false);
    }
    //双击退出
	    $ionicPlatform.registerBackButtonAction(function (e) {
	      //判断处于哪个页面时双击退出
	      if (true) {
	        if ($rootScope.backButtonPressedOnceToExit) {
	          $rootScope.confirmExitApp();
	        } else {
	          $rootScope.backButtonPressedOnceToExit = true;
	          setTimeout(function () {
	            $rootScope.backButtonPressedOnceToExit = false;
	          }, 2000);
	        }
	      }else if ($ionicHistory.backView()) {
	        //$ionicHistory.goBack();
	      } else {
	        $rootScope.backButtonPressedOnceToExit = true;
	        setTimeout(function () {
	          $rootScope.backButtonPressedOnceToExit = false;
	        }, 2000);
	      }
	      e.preventDefault();
	      return false;
    }, 101);
  });

    $rootScope.showLoading = function() {
      //options default to values in $ionicLoadingConfig
      $ionicLoading.show({
        content: '加载中...',
        template: '加载中...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };

    $rootScope.hideLoading = function() {
      $ionicLoading.hide();
    };

    $rootScope.confirmExitApp=function() {
      var msgpopup = $ionicPopup.alert({
        title: '<font>确认关闭App？</font>',
        scope: $rootScope,
        buttons: [
          {
            text: '<font color="#f1730b>确定</font>',
            type: 'button-clear',
            onTap: function (e) {
              ionic.Platform.exitApp();
              msgpopup.close();
            }
          },
          {
            text: '<font>取消</font>',
            type: 'button-clear',
            onTap: function (e) {
              msgpopup.close();
            }
          }
        ]
      });
    }

    $rootScope.confirmUpdateApp=function(newversion,appurl) {
      var msgpopup = $ionicPopup.alert({
        title: '<font>确认升级App？</font>',
        scope: $rootScope,
        buttons: [
          {
            text: '<font color="#f1730b>确定</font>',
            type: 'button-clear',
            onTap: function (e) {
              var url =appurl;
              if(ionic.Platform.platform()==='android'){
                /*
                var targetPath = "cdvfile://localhost/persistent/yixin-"+newversion+".apk";
                var trustHosts = true
                var options = {};
                $rootScope.showAlert("即将下载安装包，请稍后...");
                $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
                  $cordovaFileOpener2.open(targetPath, 'application/vnd.android.package-archive'
                  ).then(function () {
                      $rootScope.showAlert("打开安装包成功");
                      msgpopup.close();
                    }, function (err) {
                      $rootScope.showAlert("打开安装包失败");
                      msgpopup.close();
                    });

                }, function (err) {
                  $rootScope.showAlert("下载更新包失败");
                });
                */
                window.open(url, '_system');
                navigator.app.exitApp();
              }
              if(ionic.Platform.platform()==='ios'){
                window.open(url, '_system');
                navigator.app.exitApp();
              }
            }
          },
          {
            text: '<font>取消</font>',
            type: 'button-clear',
            onTap: function (e) {
              if(isNull(store.get('newuser'))){
                store.set('newuser','true');
                $state.go("welcome");
              }else {
                $state.go("login");
              }
              msgpopup.close();
            }
          }
        ]
      });
    }

    $rootScope.showAlert=function(msg) {
      var msgpopup = $ionicPopup.alert({
        title: '<font>' + msg + '</font>',
        scope: $rootScope,
        buttons: [
          {
            text: '<font>确定</font>',
            type: 'button-clear',
            onTap: function (e) {
              msgpopup.close();
            }
          }
        ]
      });
    }
    $rootScope.showAlertToList=function(msg) {
      var msgpopup = $ionicPopup.alert({
        title: '<font>' + msg + '</font>',
        scope: $rootScope,
        buttons: [
          {
            text: '<font>确定</font>',
            type: 'button-clear',
            onTap: function (e) {
              msgpopup.close();
              $state.go('list');
            }
          }
        ]
      });
    }
    $rootScope.showAlertToLogin=function(msg) {
      var msgpopup = $ionicPopup.alert({
        title: '<font>' + msg + '</font>',
        scope: $rootScope,
        buttons: [
          {
            text: '<font>确定</font>',
            type: 'button-clear',
            onTap: function (e) {
              msgpopup.close();
              $state.go('login');
            }
          }
        ]
      });
    }
})
