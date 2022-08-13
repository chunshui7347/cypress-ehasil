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
    cy.get('input[ng-model="$ctrl.objItem.noHakmilik"]').type(45451)
  });
});

describe('Submit', () => {
  it('Carian ', () => {
    cy.get('.form-horizontal').eq(1).find('button').contains('Cari').click()
  });
});

describe('Read File', () => {
  const keys = [];
  const values = [];
  const result = {};

  it('Scrape Data', function () {
    cy.wait(2000)
    cy.get('tbody>tr')
      .each(function ($row, index, $rows) {

        if (index >= 13 && index <= 16) {
          cy.wrap($row).within(function () {
            cy.get('td')
              .each(function ($cellData, index, $columns) {
                cy.log('index', index)
                cy.log('cell', $cellData.text())

                if (index == 2)
                  values.push($cellData.text().replace(/\r?\n|\r/g, "").trim())
                else if (index == 1)
                  keys.push($cellData.text().replace(/\r?\n|\r/g, "").trim())
              }
              )
          }
          )
        }
        else {
          cy.wrap($row).within(function () {
            cy.get('td')
              .each(function ($cellData, index, $columns) {
                cy.log('index', index)
                cy.log('cell', $cellData.text())

                if (index == 1)
                  values.push($cellData.text().replace(/\r?\n|\r/g, "").trim())
                else
                  keys.push($cellData.text().replace(/\r?\n|\r/g, "").trim())
              }
              )
          }
          )
        }
      }
      ).then(() => {
        for (let index = 0; index < keys.length; ++index) {
          result[keys[index]] = values[index];
        }
        cy.writeFile("xlsxData.json", JSON.stringify(result))
      });
  })
});