$(document).ready(function() {
    var $grid = $('.cursorbox')
    var $gridItem = $('.cursorbox-item')
    var gridItemHeight = $gridItem.height()
    var gridItemWidth = $gridItem.width()

    var horzCount = Math.floor($grid.width() / gridItemWidth)
    var vertCount = Math.floor($grid.height() / gridItemHeight)

    var totalGridItems = horzCount * vertCount
    for (var i = 0; i < totalGridItems; i++) {
        var $gridItemClone = $gridItem.clone();
        $grid.append($gridItemClone);
    }
});