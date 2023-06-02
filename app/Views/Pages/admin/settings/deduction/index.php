<button type="button" class="btn btn-default w-25 my-3" data-bs-toggle="modal" data-bs-target="#insertDeduction">New Data</button>
<section class="content mt-3">
    <div class="card">
    <div type="button" class="btn btn-primary w-100 p-2">Deduction</div>
        <div class="card-body"> 
          <div class="table-responsive text-nowrap">
                <table class="table" id="deduction_table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Deduction</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <?php if (isset($content))
                    $no = 1;
                    foreach($deduction as $d) { 
                    ?>
                    <tr>
                        <td><?php echo $no++ ?></td>
                        <td><div class="fw-bold fs-bold"><?= $d['name'] ?></div><div><p>Description: <?= $d['description'] ?></p></div></td>
                        <td>
                              <button type="button" class='btn btn-icon btn-success updateDeduction' data-bs-toggle="modal" data-bs-target="#editDeduction" data-id="<?= $d['id']?>" data-name="<?= $d['name']?>" data-description="<?= $d['description']?>">
                                <ion-icon name="pencil-outline"></ion-icon>
                              </button>
                              <button type="button" class="btn btn-icon btn-outline-danger deleteDeduction" data-bs-toggle="modal" data-bs-target="#deleteDeduction" data-id="<?= $d['id']?>">
                                <ion-icon name="trash-outline"></ion-icon>
                              </button>
                        </td>                             
                    </tr>
                  <?php }?>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
<?php echo view('Pages/modals/deduction.php');?>