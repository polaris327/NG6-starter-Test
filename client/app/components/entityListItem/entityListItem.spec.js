import EntityListItemModule       from './entityListItem'
import EntityListItemController   from './entityListItem.controller';
import EntityListItemComponent    from './entityListItem.component';
import EntityListItemTemplate     from './entityListItem.html';

describe('EntityListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EntityListItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EntityListItemController();
    };
  }));

  describe('Template', () => {

      it('has img for the entity', () => {
          expect(EntityListItemTemplate).to.match(/{{\s?vm\.entity\.photo\s?}}/g);
      });

      it('has entity name in the template', () => {
          expect(EntityListItemTemplate).to.match(/{{\s?vm\.entity\.name\s?}}/g);
      });

      it('has entities about info in the template', () => {
          expect(EntityListItemTemplate).to.match(/{{\s?vm\.entity\.about\s?}}/g);
      });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EntityListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EntityListItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EntityListItemController);
      });

      it('have the correct entity interace', () => {
         expect(component.bindings.entity).to.equal('<');
      });
  });
});
