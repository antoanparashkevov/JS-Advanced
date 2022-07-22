//ensureStart(str) - if the current string doesn't start with str, return a new string in format (str + current string)
//ensureEnd(str) - the same like above
//isEmpty() - return boolean depending if the string is empty or not
//truncate(n) - cut n characters and append ellipsis to the end
//-- if string length is longer than n, return current string
//-- if n is longer or equal to the string length, split the string with space and append an ellipsis
//-- if no space occurs in current string return n - 3 characters and an ellipsis
//-- if n is less than 4, return n amount of period
//format(string, ...params) - replace number surrounded by curly braces with given params

(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        }
        return this.toString()
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.concat(str);
        }
        return this.toString()
    }
    String.prototype.isEmpty = function () {
        return this.length === 0

    }
    String.prototype.truncate = function (n) {
        if (n < 3) {
            return '.'.repeat(n)
        }
        if (this.length <= n) {
            return this.toString()
        } else {
            let getLastIndexOfSpace = this.toString().substring(0, n - 2).lastIndexOf(' ')
            if (getLastIndexOfSpace !== -1) {
                return this.toString().substring(0, getLastIndexOfSpace) + '...'
            }
            return this.toString().substring(0, n - 3) + '...'
        }
    }
    String.format = function (string, ...params) {
        for(let i = 0;i<params.length;i++){
            string = string.replace(`{${i}}`,`${params[i]}`)
        }
       return string
    }
})()


let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.ensureEnd('attach')
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)
