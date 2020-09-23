<template>
  <div>
    <div class="card text-dark mb-3 shadow" style="max-width: 55rem; height: 22rem;">
      <div class="card-header">Edit</div>
      <div class="card-body text-left mt-4">
        <form enctype="multipart/form-data" v-for="(item, index) in detailProd" :key="index">
          <div class="name row mb-2">
            <div class="col-3 pt-1">Name</div>
            <div class="col-9" style="border: none;">
              <input
                type="text"
                class="form-control shadow-sm bg-white rounded"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                v-model="item.name"
              />
            </div>
          </div>
          <div class="name row mb-2">
            <div class="col-3 pt-1">Image</div>
            <div class="col-9" style="border: none;">
              <input type="file" id="img" name="img" accept="image/*" @change="uploads($event)" />
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
                v-model="item.price"
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
          <button class="btn btn-danger mt-3 mr-2" block v-on:click.prevent="delBtn()">Delete</button>
          <button class="btn btn-info mt-3" block v-on:click.prevent="addEdit()">Update Product</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      input: {
        name: null,
        price: null,
        image: null,
        id_category: null,
        id: this.$route.params.id
      }
    }
  },
  computed: {
    ...mapGetters({
      detailProd: 'product/dettail'
    }),
    ...mapGetters({
      dataCategory: 'category/category'
    })
  },
  methods: {
    ...mapActions({
      detail: 'product/detailProduct',
      update: 'product/updateProduct',
      delete: 'product/deleteProduct'
    }),
    rot () {
      this.id = this.$route.params.id
      this.detail(this.id)
    },
    addEdit () {
      this.input.name = this.detailProd[0].name
      this.input.image = this.image
      this.input.price = this.detailProd[0].price
      this.update(this.input)
        .then((response) => {
          if (response.code === 500) {
            alert('Category harus diisi')
          } else {
            alert(response.message)
            window.location = '/'
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    uploads (event) {
      this.image = event.target.files[0]
    },
    delBtn () {
      this.delete(this.id)
        .then((response) => {
          alert(response.message)
          window.location = '/'
        }).catch((err) => {
          alert(err)
        })
    }
  },
  mounted () {
    this.rot()
  }
}
</script>
