var map = function() {
    emit({gmina: this.gmina}, { count: 1 });
}; var reduce = function (key, values) {
    var count = 0;
    values.forEach(function (v) {
        count += v['count'];
    });
    return {count: count};
}; db.kody_pocztowe.mapReduce(map,reduce,{ out : 'gminy'})