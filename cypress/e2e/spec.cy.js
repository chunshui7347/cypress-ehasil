describe('Load e hasil page', () => {
  it('passes', () => {
    cy.visit('https://ehasil.selangor.gov.my/app/search')
  })
})

describe('Search', () => {
  it('Find Jenis Bill ', () => {
    cy.get('select[ng-model="$ctrl.objItem.jenisBil"]').select('1')
  });

  it('Find Jenis Carian ', () => {
    cy.get('select[ng-model="$ctrl.objItem.jenisCarian"]').select('1')
  });

  it('Find Jenis Daerah ', () => {
    cy.get('select[ng-model="$ctrl.objItem.kodDaerah"]').select('object:32')
  });

  it('Find Jenis Mukim ', () => {
    cy.get('select[ng-model="$ctrl.objItem.kodMukim"]').select('string:01')
  });

  it('Find Jenis Hak Milik ', () => {
    cy.get('select[ng-model="$ctrl.objItem.kodJnshm"]').select('string:GRN')
  });

  it('Find No Hak Milik ', () => {
    cy.get('input[ng-model="$ctrl.objItem.noHakmilik"]').type(99999)
  });
});

describe('Submit', () => {
  it('Carian ', () => {
    cy.get('.form-horizontal').eq(1).find('button').contains('Cari').click();
  });
});