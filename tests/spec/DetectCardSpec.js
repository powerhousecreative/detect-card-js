// Generated by CoffeeScript 1.8.0
(function() {
  beforeEach(function() {
    return $('body').append('<div id="testContainer"></div>');
  });

  afterEach(function() {
    return $('#testContainer').remove();
  });

  describe('DetectCard', function() {
    beforeEach(function() {
      var card_input_html;
      card_input_html = '<label for="card" >Card number:</label><input id="card" type="text">';
      $('#testContainer').append(card_input_html);
      return $('#card').detectCard();
    });
    afterEach(function() {
      return $('#testContainer').children().remove();
    });
    it('should call the cardChange event if the card type has changed', function() {
      spyOnEvent('#card', 'cardChange');
      enter_visa_number_to($('#card'));
      return expect('cardChange').toHaveBeenTriggeredOn('#card');
    });
    return it('should not call the cardChanged event if the card type has not changed', function() {
      spyOnEvent('#card', 'cardChange');
      enter_visa_number_to($('#card'));
      expect('cardChange').toHaveBeenTriggeredOn('#card');
      jasmine.JQuery.events.cleanUp();
      enter_visa_number_to($('#card'));
      return expect('cardChange').toNotHaveBeenTriggeredOn('#card');
    });
  });

}).call(this);
