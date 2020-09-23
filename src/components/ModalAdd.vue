<template>
  <div>
    <b-modal id="modal-1" title="Add Product" hide-footer>
      <form enctype="multipart/form-data">
        <div class="name row mb-2">
          <div class="col-3 pt-1">Name</div>
          <div class="col-9" style="border: none;">
            <input
              type="text"
              class="form-control shadow-sm bg-white rounded"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              v-model="input.name"
            />
          </div>
        </div>
        <div class="name row mb-2">
          <div class="col-3 pt-1">Image</div>
          <div class="col-9" style="border: none;">
            <input type="file" id="img" name="img" accept="image/*" @change="uploads($event)"/>
          </div>
        </div>
        <div class="name row mb-2">
          <div class="col-3 pt-1">Price</div>
          <div class="col-5" style="border: none;">
            <input
              type="text"
              class="form-control shadow-sm bg-white rounded"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              v-model="input.price"
            />
          </div>
        </div>
        <div class="name row mb-2">
          <div class="col-3 pt-1">Category</div>
          <div class="col-5" style="border: none;">
            <select v-model="input.id_category" value="category">
              <option
                v-for="(item,index) in dataCategory"
                :key="index"
                :value="item.id_category"
              >{{item.category}}</option>
            </select>
          </div>
        </div>
        <b-button class="mt-3" block @click="addNew()">Add Product</b-button>
      </form>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      input: {
        name: null,
        price: null,
        image: null,
        id_category: null
      }
    }
  },
  computed: {
    ...mapGetters({
      dataCategory: 'category/category'
    })
  },
  methods: {
    ...mapActions({
      getCategory: 'category/getCategory'
    }),
    uploads (event) {
      this.image = event.target.files[0]
    },
    ...mapActions({
      modalAdd: 'product/addProduct'
    }),
    addNew () {
      this.input.image = this.image
      this.modalAdd(this.input)
        .then((response) => {
          alert(response.message)
          window.location.reload()
        }).catch((err) => {
          alert(err.message)
        })
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>
