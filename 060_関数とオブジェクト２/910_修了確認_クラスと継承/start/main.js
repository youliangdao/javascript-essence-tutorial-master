/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 *
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 *
 * を内部で行います。
 *
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 *
 ****************************************
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 *
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */


// Userクラスの定義
// classを用いない場合
// function User(name, roll="normal") {
//   this.name = name;
//   this.roll = roll;
// }

// User.prototype.login = function () {
//   console.log(`User: ${this.name}`)
//   return true;
// }

// User.prototype.checkRoll = function () {
//   if (this.roll === "admin") {
//     console.log("you have admin roll")
//     return true;
//   }
//   else {
//     console.log("you have normal roll")
//     if (this.roll === "normal") {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
// }

// User.prototype.redirect = function () {
//   if (this.roll === "normal") {
//     console.log("redirect : /")
//   }
//   else if (this.roll === "admin") {
//     console.log("redirect : /admin")
//   }
//   return true;
// }

// クラスを用いる場合
class User {
  constructor (name, roll="normal") {
    this.name = name;
    this.roll = roll;
  }

  login() {
    console.log(`User: ${this.name}`)
    return true;
  }

  checkRoll() {
    if (this.roll === "admin" && this instanceof AdminUser) {
      console.log("you have admin roll")
      return true;
    }
    else {
      console.log("you have normal roll")
      if (this.roll === "normal") {
        return true;
      }
      else {
        return false;
      }
    }
  }

  redirect() {
    if (this.roll === "normal") {
      console.log("redirect : /")
    }
    else if (this.roll === "admin") {
      console.log("redirect : /admin")
    }
    return true;
  }

}


//AdminUserクラスの定義
// classを用いない場合
// function AdminUser(name, roll="admin") {
//   User.call(this, name, roll)
// }
// AdminUser.prototype = Object.create(User.prototype);

// AdminUser.prototype.login = function () {
//   console.log(`User: ${this.name}`)
//   if (this.roll === "admin") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// classを用いる場合
class AdminUser extends User {
  constructor(name, roll="admin") {
    super(name, roll);
  }

  login () {
    console.log(`User: ${this.name}`)
    if (this.roll === "admin") {
      return true;
    }
    else {
      return false;
    }
  }
}

// loginController関数の定義
function loginController(user) {
  if (user.login()
    && user.checkRoll()
    && user.redirect()) {
    console.log('login success');
  } else {
    console.log('login failed');
  }
}

// loginController(new User('Bob', "admin"));
loginController(new AdminUser('Bob', "normal"));
