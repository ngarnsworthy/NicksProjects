var fs = require('fs');
var passwords = [];

fs.readFile('db.txt', (err, data) => {
  passwords = JSON.stringify(data);
});

/**
 *
 */
function find(a_username, a_password) {
  const val = passwords.find(function(obj) {
    if (obj.un === a_name) {
      return true;
    }
  });
  if (val) {
    if (val.pw === a_password) {
      return val;
    }
  }
}

    module.exports = {
      passwords: [],

      writeDB: function() {
        console.log(this.passwords)
          fs.writeFile('db.txt', JSON.stringify(this.passwords), err => {
              if (err) throw err;
            });
      },

      /** Add a user to the system */
      add: function(a_username, a_password, a_accountVal = 0) {
        this.passwords.push({
          un: a_username,
          pw: a_password,
          av: a_accountVal
        });
        this.writeDB();
      },

      /** Check the balance for a user in the system
       *   name and password must match a user
       * @param {string} a_name - Username
       * @param {string} a_password - users password
       * @returns {number|undefined} account value or undefined
       */
      check: function(a_name, a_password) {
        let ret = find(a_name, a_password)
        return ret && ret.av;
      },

      account: function(a_username, a_password, a_accountValIncrese) {
        let acount = find(a_username, a_password);
        if (acount) {
          acount.av += a_accountValIncrese
          this.writeDB()
        }
      }
    };

    return module.exports;
