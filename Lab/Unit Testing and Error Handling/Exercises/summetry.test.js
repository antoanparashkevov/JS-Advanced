//I will not see the actual code, that I test, this is so called BlackBox testing because this will help me to find better tests
const {expect} = require('chai')
const {isSymmetric} = require('./summetry')

describe('Symmetry check',()=>{
    it('works with symmetric array (happy-path)',()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });
    it('returns false for non-symmetric arrays (happy-path)',()=>{
        expect(isSymmetric([1,2,3])).to.be.false;
    });
    it('returns false for non-array (happy-path)',()=>{
        expect(isSymmetric(1)).to.be.false;
    });
    it('works with symmetric odd-length array',()=>{
        expect(isSymmetric([1,2,1])).to.be.true;
    });
    it('works with symmetric string (not number) array',()=>{
        expect(isSymmetric(['1','2','2','1'])).to.be.true;
    });
    it('returns false for string parameter (not an array)',()=>{
        expect(isSymmetric('abba')).to.be.false;
    });
    it('returns false for mixed type parameters ',()=>{
        expect(isSymmetric([1,2,2,'1'])).to.be.false;
    });
})
