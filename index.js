$(function(){
    // event takes place when information is submitted.
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        //create a variable to enter in new item.
        const newItem = $('#shopping-list-entry').val();

        //gives the user ability to enter new value.
        $('#shopping-list-entry').val('');

        //add a value to the top of the <li>.
        $('ul').prepend(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });
    //this should place a strike through checked items after hitting check button.
    $('.shopping-item-toggle').on('click',function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });

    
  // on any button clicked in <ul> the <li> item will be removed.
    $('ul').on('click', '.shopping-item-delete', function(event) {
         $(this).closest('li').remove();
        });
    });
