const { test } = QUnit;

const jatek = new Jatek();



QUnit.module('test', function () {

    

    QUnit.test('létezik e függvény', (assert) => {
        assert.ok(jatek.kepekTombFeltoltese, "Létezik az függvény");
    });

    QUnit.test('létezik e függvény', (assert) => {
        assert.ok(typeof jatek.kepekTombFeltoltese === "function", "Függvény!");
    });

    test("megvan az összes kép", function (assert){
        assert.equal(kartyaTomb.length, 24);
    });

    test("léteznek az IMG tagek", function (assert){

        for (let index = 0; index < kartyaTomb.length; index++) {
            assert.ok(kartyaTomb[index].kepElem,  "léteznek az IMG tagek");
            
        }
    });

    test("a kártya blokkolt értéke kezdetben false", function (assert){
        let index = 0;
        assert.equal(kartyaTomb[index].blokkolt, false);
        
    });
    test("jo a hatter", function (assert){
        let index = 0;
        assert.equal(kartyaTomb[index].hatter, "../kepek/hatter.jpg");
        
    });
    test("a kártya állapota kezdetben false", function (assert){
        let index = 1;
        assert.equal(kartyaTomb[index].allapot, false);
        
    });
    test("két kártyára kattintasnak minden blokkolt lesz", function (assert){
        let index = 0;
        kartyaTomb[index].kattintas();
        kartyaTomb[index+1].kattintas();
        for (let i = 0; i < kartyaTomb.length; i++) {
            assert.equal(kartyaTomb[i].blokkolt, true);
            
        }
    });
    test("a kártya állapota kattintásra változik", function (assert){
        let index = 0;
        kartyaTomb[index].kattintas();
        assert.equal(kartyaTomb[index].allapot, true);
        
    });
    test("a kártya blokkoltsaga kattintásra változik", function (assert){
        let index = 2;
        kartyaTomb[index].kattintas();
        assert.equal(kartyaTomb[index].blokkolt, true);
        
    });
    test("a kártya állapota változik", function (assert){
        let index = 1;
        kartyaTomb[index].allapotValtozas();
        assert.equal(kartyaTomb[index].allapot, true);
        
    });
});

