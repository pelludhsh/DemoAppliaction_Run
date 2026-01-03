//for drag and drop we need identiy 2 elements source and target
import{test,expect} from '@playwright/test'
test('UploadFiles',async ({page})=>{

    //await page.goto('https://officebasket.in/career');
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  // await page.getByRole('textbox', { name: 'Upload Resume' })
   await page.locator('#filesToUpload').setInputFiles(['tests\Upload Files\challan.pdf' , 'tests\Upload Files\CHOICE paper.pdf']);

   // await rome.dragTo(Italy);
    

    await page.waitForTimeout(9000);
})
