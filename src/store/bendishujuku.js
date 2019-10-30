export default {
    namespaced:true,
    state:{
    },
    getters:{
    },
    mutations:{

    },
    actions:{
        


    // 创建对象仓库
    chuangjian(context){
        console.log('创建或者链接数据库开始')
        let request = indexedDB.open('user','1.0')
        request.onsuccess = function(){
          console.log('创建或者链接数据库成功')
        }
        request.onerror = function(){
          console.log('创建或者链接失败的时候')
        }
        request.onupgradeneeded = function(){
          console.log('版本更新')
          if(this.result.objectStoreNames.contains("Student")){
            this.result.deleteObjectStore('Student')
          }
          this.result.createObjectStore('Student',{
            keyPath:'id',
            autoIncrement:true
          })
          console.log('创建对象仓库成功')
        }
  
      },
  
      // 获取数据库
      huoqu(context){
        let result = indexedDB.open('user','1.0')
        result.onerror = function(){
          console.log('链接失败')
        }
        result.onsuccess = function(){
          let db = this.result
          let ts = db.transaction('Student','readwrite')
          let store = ts.objectStore('Student')
          console.log(store)
          console.log('获取对象仓库成功')
        }
      },
  
      //修改数据库 
      xiugai(context,token){
        let result = indexedDB.open('user','1.0')
        result.onerror = function(){
        }
        result.onsuccess = function(){
          let db = this.result
          let ts = db.transaction('Student','readwrite')
          let store = ts.objectStore('Student')
          let req = store.put({token})
          req.onsuccess = function(){
            console.log('保存成功')
          }
          req.onerror = function(){
            console.log('保存失败')
          }
        }
      },


    //   查询数据库 返回值  异步函数 返回值为promise
    chaxun(context){
        let result = indexedDB.open('user','1.0')
        result.onerror = function(){
            console.log('链接失败')
        }
        result.onsuccess=function(){
            let db = this.result
            let ts = db.transaction('Student','readwrite')
            let store = ts.objectStore('Student')
            let req = store.getAll()

            console.log(req)
            // req.onsuccess = function(){
            //   console.log('查询成功',this.result)
            //   return this.result
            // }
            // req.onerror = function(){
            // console.log('查询失败')
            // }
        }
        // return this.result.result
    },



    //   删除数据

    shanchu(){
        let result = indexedDB.open('user','1.0')
        result.onerror = function(){
            console.log('链接失败')
        }
        result.onsuccess = function(){
            let db = this.result
            let ts = db.transaction('Student','readwrite')
            let store = ts.objectStore('Student')
            let req = store.delete(2)
            req.onsuccess = function(){
                console.log('删除成功')
            }
            req.onerror = function(){
                console.log('删除失败')
            }
        }
    }















    }
}
