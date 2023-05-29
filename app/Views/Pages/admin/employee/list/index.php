<section class="content mt-3">
    <div class="card">
        <div class="card-body"> 
          <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Value</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <?php if (isset($content))
                    $no = 1;
                    foreach($data as $d) { 
                    ?>
                    <tr>
                        <td><?php echo $no++ ?></td>
                        <td><?= $d['name'] ?></td>
                        <td><?= $d['user_number'] ?></td>
                        <td>
                              <button type="button" class='btn btn-icon btn-success' id="editAllowance" data-id="<?= $d['id']?>">
                                <ion-icon name="pencil-outline"></ion-icon>
                              </button>
                              <button type="button" class="btn btn-icon btn-outline-danger" id="deleteAllowance" data-id="<?= $d['id']?>">
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